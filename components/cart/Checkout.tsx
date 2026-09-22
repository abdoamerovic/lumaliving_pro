"use client";

import { useCartStore } from "@/store/cartStore";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;
  const isEmpty = cart.length === 0;
  const t=useTranslations("cart")

  return (
    <section className="border border-[#e5ddd5] bg-white p-7">
      <h1 className="mb-8 font-serif text-2xl text-[#222]">{t("orderSummary")}</h1>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-base text-[#333]">{t("subtotal")}</span>
          <span className="text-base text-[#333]">
            {subtotal.toLocaleString()} {t("sar")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base text-[#333]">{t("shipping")}</span>
          <span className="text-base text-green-600">{t("free")}</span>
        </div>
      </div>

      <div className="my-5 border-t border-[#e5ddd5]" />

      <div className="mb-8 flex items-center justify-between">
        <span className="text-lg font-bold text-[#222]">{t("total")}</span>
        <span className="text-lg font-bold text-[#222]">
          {total.toLocaleString()}{t("sar")}
        </span>
      </div>
      <Link href="/checkout">
      <button
        disabled={isEmpty}
        className="w-full bg-[#2A2826] py-4 font-semibold text-white transition hover:bg-[#96603D] disabled:cursor-not-allowed disabled:opacity-50"
        
      >
        {t("checkout")}
      </button>
      </Link>
      <Link href={"/products"}>
      <button className="mt-4 w-full border border-[#e5ddd5] py-4 text-[#333] transition hover:bg-[#f8f5f2]">
        {t("continueShopping")}
      </button>
      </Link>
    </section>
  );
}