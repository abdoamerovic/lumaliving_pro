"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { CiCircleCheck } from "react-icons/ci";

interface CartItem {
  id: string | number;
  name_ar: string;
  name_en: string;
  price: number;
  quantity: number;
}

interface CheckoutSuccessProps {
  order: {
    form: {
      fullName: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      country: string;
    };
    cart: CartItem[];
  };
}

export default function CheckoutSuccess({ order }: CheckoutSuccessProps) {
  const t = useTranslations("checkout");
  const locale = useLocale();

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-[#E9DECC] bg-white p-12 text-center">
      <CiCircleCheck size={64} className="mb-4 text-green-600" />
      <h2 className="mb-2 text-xl font-bold text-[#2A2724]">
        {t("successTitle")}
      </h2>
      <p className="mb-6 text-sm text-[#8A8478]">{t("successMessage")}</p>

      <div className="mb-6 w-full text-left text-sm text-[#2A2724]">
        <p className="mb-2 font-semibold">{order.form.fullName}</p>
        <p className="text-[#8A8478]">{order.form.email}</p>
        <p className="text-[#8A8478]">{order.form.phone}</p>
        <p className="text-[#8A8478]">
          {order.form.address}, {order.form.city}, {order.form.country}
        </p>

        <div className="my-4 border-t border-[#E9DECC]" />

        {order.cart.map((item) => (
          <div key={item.id} className="flex justify-between py-1">
            <span>
              {(locale === "ar" ? item.name_ar : item.name_en)} x{item.quantity}
            </span>
            <span>{(item.price * item.quantity).toLocaleString()} {t("riyal")}</span>
          </div>
        ))}
      </div>

      <Link
        href="/products"
        className="rounded-md bg-[#2A2724] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#96603D]"
      >
        {t("backToShopping")}
      </Link>
    </div>
  );
}