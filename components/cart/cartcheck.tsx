"use client";

import { useCartStore } from "@/store/cartStore";


export default function Checkout() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;
  

  return (
    <section className="border border-[#e5ddd5] bg-white p-7">
      <h1 className="mb-8 font-serif text-2xl text-[#222]">
        Order Summary
      </h1>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-base text-[#333]">
            Subtotal
          </span>

          <span className="text-base text-[#333]">
            {subtotal.toLocaleString()} SAR
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base text-[#333]">
            Shipping
          </span>

          <span className="text-base text-green-600">
            Free
          </span>
        </div>
      </div>

      <div className="my-5 border-t border-[#e5ddd5]" />

      <div className="mb-8 flex items-center justify-between">
        <span className="text-lg font-bold text-[#222]">
          Total
        </span>

        <span className="text-lg font-bold text-[#222]">
          {total.toLocaleString()} SAR
        </span>
      </div>

      <button className="w-full bg-[#2A2826] py-4 font-semibold text-white transition hover:bg-[#96603D]">
        Proceed to Checkout
      </button>

      <button className="mt-4 w-full border border-[#e5ddd5] py-4 text-[#333] transition hover:bg-[#f8f5f2]">
        Continue Shopping
      </button>
    </section>
  );
}