"use client";

import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

interface ShoppingProps {
  locale: string;
  t: {
    furniture: string;
    addToCart: string;
  };
}

export function Shopping({ locale, t }: ShoppingProps) {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const p=useTranslations("product")
  const addToCart = useCartStore((state) => state.addToCart);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  

  const handleAddToCart = (product: (typeof products)[number]) => {
    console.log("CLICKED:", product.id, product.name_en);

    addToCart(product);

    console.log("CART AFTER:", useCartStore.getState().cart);
  };
 
  return (
    <section className="bg-[#faf8f5] px-1 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => {
          const isSaved = wishlist.has(product.id);
          const name = locale === "ar" ? product.name_ar : product.name_en;

          return (
            <div
              key={product.id}
              className="flex flex-col border-2 border-[#E9DECC] pb-2"
            >
              <Link href={`/${locale}/products/${product.id}`}>
                <div className="relative aspect-6/8 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    aria-label="Toggle wishlist"
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm"
                  >
                    <CiHeart
                      size={14}
                      className={isSaved ? "fill-red-500 text-red-500" : "text-gray-500"}
                    />
                  </button>
                </div>
              </Link>

              <div className="px-4">
                <p className="mt-3 text-[11px] font-medium tracking-wide text-[#B8764F]">
                  {t.furniture}
                </p>
                <Link href={`/products/${product.id}`}>
                  <p className="mt-1 font-serif text-base text-[#2A2724] hover:text-[#B8764F]">
                    {name}
                  </p>
                </Link>

                <div className="mt-1 flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <CiStar
                        key={i}
                        size={16}
                        className={
                          i < product.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#8A8478]">{product.review}</span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium text-[#2A2724]">{product.price} {p("price")}</span>
                  <button
                      type="button"
                      onClick={() => {
                        
                        handleAddToCart(product);
                      }}
                      className="rounded-md border border-[#2A2724] px-3 py-1.5 text-xs font-medium text-[#2A2724]"
                    >
                      {t.addToCart}
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Shopping;