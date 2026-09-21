"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";


export default function ForgotPasswordForm() {
  const t = useTranslations("auth");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const locale = useLocale();
  const place = locale === "ar" ? "ادخل الايميل" : "enter email";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("Forgot password failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-md border border-[#E9DECC] bg-white px-4 py-3 text-sm text-[#2A2724] placeholder:text-[#B8ADA0] focus:outline-none focus:ring-1 focus:ring-[#B8764F]";
  const labelClass = "mb-2 block text-sm font-medium text-[#2A2724]";

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[#E9DECC] bg-white p-8 text-center">
        <p className="text-sm text-[#4A453F]">{t("resetLinkSent")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>{t("email")}</label>
        <input
          type="email"
          className={inputClass}
          placeholder={place}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{t("resetLinkError")}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-[#2A2724] py-4 font-semibold text-white transition hover:bg-[#96603D] disabled:opacity-50"
      >
        {status === "loading" ? t("sending") : t("sendResetLink")}
      </button>
    </form>
  );
}