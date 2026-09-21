"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useLocale } from "next-intl";

export default function CartDetails() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const locale = useLocale();
  const uselocale=locale==="ar"?"السلة فارغة":"Your cart is empty"
  const remove=locale==="ar"?"ازالة":"remove"

  if (cart.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <p className="text-gray-500">{uselocale}.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-lg border "
        >
          <div className="flex flex-row">
          <Image src={item.image}
                    alt={item.name_en}
                    width={80}
                    height={80}
                    className="object-cover hover:scale-105 transition-transform duration-500 p-3"
                    
          ></Image>
            <div className="flex flex-col p-3">
              <h2 className="font-semibold">{locale==="ar"?item.name_ar:item.name_en}</h2>
              <p >{locale==="ar"?item.typear:item.type}</p>
              <div className="flex gap-2">
                {item.color.map((c: string, index: number) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Select color ${c}`}
                    className={`h-5 w-5 rounded-full transition-transform hover:scale-110 border-2 ${
                     selectedColor === c
                    ? "border-amber-400"
                    : "border-transparent"
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                  />
                  ))}
              </div>
              <div className="mt-2 flex items-center gap-3">
              
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded border px-2 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <span className="text-sm">{item.quantity}</span>
              
              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded border px-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            </div>
            

            
          </div>
          <p className="text-gray-500">${(item.price)}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-gray-500 hover:text-red-700"
          >
            {remove}
          </button>
        </div>
      ))}
    </div>
  );
}