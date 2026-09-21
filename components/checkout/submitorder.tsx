"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";

interface SubmitOrderProps {
  onSuccess: () => void;
}

export default function Submitorder({ onSuccess }: SubmitOrderProps) {
  const t = useTranslations("checkout");
  const locale = useLocale();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const errorMessage = locale === "ar" ? "لا يوجد محتوى" : "Please check content";
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // لو السلة فاضية، منكملش submit خالص
    if (cart.length === 0) {
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, cart }),
      });

      if (!res.ok) {
        throw new Error(`Order request failed with status ${res.status}`);
      }

      clearCart();
      onSuccess();
    } catch (err) {
      console.error("Order failed:", err);
      // show an error state instead
    }
  };

  const inputClass =
    "w-full rounded-md border border-[#E9DECC] bg-white px-4 py-3 text-sm text-[#2A2724] placeholder:text-[#B8ADA0] focus:outline-none focus:ring-1 focus:ring-[#B8764F]";
  const labelClass = "mb-2 block text-sm font-medium text-[#2A2724]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>{t("fullName")}</label>
        <input
          className={inputClass}
          placeholder={t("fullNamePlaceholder")}
          value={form.fullName}
          onChange={handleChange("fullName")}
          required
        />
      </div>

      <div>
        <label className={labelClass}>{t("email")}</label>
        <input
          type="email"
          className={inputClass}
          placeholder={t("emailPlaceholder")}
          value={form.email}
          onChange={handleChange("email")}
          required
        />
      </div>

      <div>
        <label className={labelClass}>{t("phone")}</label>
        <input
          type="tel"
          className={inputClass}
          placeholder={t("phonePlaceholder")}
          value={form.phone}
          onChange={handleChange("phone")}
          required
        />
      </div>

      <div>
        <label className={labelClass}>{t("address")}</label>
        <input
          className={inputClass}
          placeholder={t("addressPlaceholder")}
          value={form.address}
          onChange={handleChange("address")}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t("country")}</label>
          <input
            className={inputClass}
            placeholder={t("countryPlaceholder")}
            value={form.country}
            onChange={handleChange("country")}
            required
          />
        </div>
        <div>
          <label className={labelClass}>{t("city")}</label>
          <input
            className={inputClass}
            placeholder={t("cityPlaceholder")}
            value={form.city}
            onChange={handleChange("city")}
            required
          />
        </div>
      </div>

      {cart.length === 0 && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={cart.length === 0}
        className="w-full rounded-md bg-[#2A2724] py-4 font-semibold text-white transition hover:bg-[#96603D] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t("submit")}
      </button>
    </form>
  );
}