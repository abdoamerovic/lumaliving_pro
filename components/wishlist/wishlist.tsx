"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";
import { CiHeart } from "react-icons/ci";
import { useLocale } from "next-intl";


interface WishlistProps {
  locale: string;
}

export function Wishlist({ locale }: WishlistProps) {
  const p = useTranslations("product");
  const wishlist = useCartStore((state) => state.wishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);
  const moveToCart = useCartStore((state) => state.moveToCart);
  const localee=useLocale()
  const titleo=localee==="ar"?"المفضله لديك فارغة":"Your wishlist is empty.";
  const producto=localee==="ar"?"تصفح المنتجات":" Browse products";

  if (wishlist.length === 0) {
    return (
      <section className="bg-[#faf8f5] px-4 py-20 text-center">
        <CiHeart size={40} className="mx-auto mb-4 text-[#B8764F]" />
        <p className="font-serif text-lg text-[#2A2724]">{ titleo}</p>
        <Link href="/products" className="mt-4 inline-block text-sm text-[#B8764F] underline">
         {producto}
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#faf8f5] px-1 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((product) => {
          const name = locale === "ar" ? product.name_ar : product.name_en;
          const movecart=localee==="ar"?"النفل الى السلة":"moveToCart";
          const remove=localee==="ar"?"ازالة":"remove";
          const nameo=localee==="ar"?product.name_ar:product.name_en;

          return (
            <div key={product.id} className="flex flex-col border-2 border-[#E9DECC] pb-2">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-6/8 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="px-4">
                <Link href={`/products/${product.id}`}>
                  <p className="mt-3 font-serif text-base text-[#2A2724] hover:text-[#B8764F]">
                    {nameo}
                  </p>
                </Link>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium text-[#2A2724]">
                    {product.price} {p("price")}
                  </span>
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => moveToCart(product.id)}
                    className="flex-1 rounded-md border border-[#2A2724] px-3 py-1.5 text-xs font-medium text-[#2A2724]"
                  >
                    {movecart}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    aria-label="Remove from wishlist"
                    className="rounded-md border border-[#E9DECC] px-3 py-1.5 text-xs text-[#8A8478]"
                  >
                    {remove}
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

export default Wishlist;