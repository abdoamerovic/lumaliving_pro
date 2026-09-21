"use client";

import { CiHeart, CiStar } from "react-icons/ci";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/data/products";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

interface ShoppingProps {
  locale: string;
  type?: string;
  sort?: string;
  t: {
    furniture: string;
    addToCart: string;
  };
}

export function Shopping({ locale, type, sort = "default", t }: ShoppingProps) {
  const p = useTranslations("product");
  const addToCart = useCartStore((state) => state.addToCart);
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);

  const filtered = type ? products.filter((item) => item.type === type) : products;

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return locale === "ar"
          ? a.name_ar.localeCompare(b.name_ar, "ar")
          : a.name_en.localeCompare(b.name_en, "en");
      default:
        return 0;
    }
  });

  const items = sorted.slice(0, 8);

  return (
    <section className="w-full bg-[#faf8f5] py-16  ">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
        {items.map((product, index) => {
          const isSaved = wishlist.some((item) => Number(item.id) === Number(product.id));
          const name = locale === "ar" ? product.name_ar : product.name_en;

          return (
            <div key={product.id} className="flex flex-col border-2 border-[#E9DECC] pb-2">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-6/8 overflow-hidden bg-gray-100   ">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500  "
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
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
                        className={i < product.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#8A8478]">{product.review}</span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium text-[#2A2724]">
                    {product.price} {p("price")}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
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