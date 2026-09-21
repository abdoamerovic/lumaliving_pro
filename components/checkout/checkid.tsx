"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Checkid() {
  const cart = useCartStore((state) => state.cart);
  const t = useTranslations("checkout");
  const locale = useLocale();
  const empty=locale==="ar"?"السلة فارغة":"emptyCart"

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="rounded-lg border border-[#E9DECC] bg-white p-6 text-center">
        <p className="text-sm text-[#8A8478]">{empty}</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#E9DECC] bg-white p-6">
      <h2 className="mb-4 font-semibold text-[#2A2724]">{t("orderSummary")}</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-[#2A2724]">
                {locale === "ar" ? item.name_ar : item.name_en}
              </p>
              <p className="text-xs text-[#8A8478]">{item.quantity}x</p>
              <p className="text-sm font-semibold text-[#2A2724]">
                {(item.price * item.quantity).toLocaleString()} {t("riyal")}
              </p>
            </div>
            <Image
              src={item.image}
              alt={locale === "ar" ? item.name_ar : item.name_en}
              width={56}
              height={56}
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>

      <div className="my-4 border-t border-[#E9DECC]" />

      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-[#2A2724]">
          {subtotal.toLocaleString()} {t("riyal")}
        </span>
        <span className="text-[#8A8478]">{t("subtotal")}</span>
      </div>

      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="font-medium text-green-600">{t("free")}</span>
        <span className="text-[#8A8478]">{t("shipping")}</span>
      </div>

      <div className="my-4 border-t border-[#E9DECC]" />

      <div className="flex items-center justify-between">
        <span className="font-bold text-[#2A2724]">
          {total.toLocaleString()} {t("riyal")}
        </span>
        <span className="font-semibold text-[#2A2724]">{t("total")}</span>
      </div>
    </div>
  );
}