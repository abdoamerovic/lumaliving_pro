"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CiCircleCheck } from "react-icons/ci";

export default function CheckoutSuccess() {
  const t = useTranslations("checkout");

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-[#E9DECC] bg-white p-12 text-center">
      <CiCircleCheck size={64} className="mb-4 text-green-600" />
      <h2 className="mb-2 text-xl font-bold text-[#2A2724]">
        {t("successTitle")}
      </h2>
      <p className="mb-6 text-sm text-[#8A8478]">{t("successMessage")}</p>
      <Link
        href="/products"
        className="rounded-md bg-[#2A2724] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#96603D]"
      >
        {t("backToShopping")}
      </Link>
    </div>
  );
}