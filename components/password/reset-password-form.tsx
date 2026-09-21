"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const t = useTranslations("auth");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMsg(t("passwordsDontMatch"));
      setStatus("error");
      return;
    }

    if (password.length < 8) {
      setErrorMsg(t("passwordTooShort"));
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      if (!res.ok) throw new Error(`Reset failed with status ${res.status}`);

      router.push("/login");
    } catch (err) {
      console.error("Reset password failed:", err);
      setErrorMsg(t("resetError"));
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-md border border-[#E9DECC] bg-white px-4 py-3 text-sm text-[#2A2724] placeholder:text-[#B8ADA0] focus:outline-none focus:ring-1 focus:ring-[#B8764F]";
  const labelClass = "mb-2 block text-sm font-medium text-[#2A2724]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>{t("newPassword")}</label>
        <input
          type="password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>

      <div>
        <label className={labelClass}>{t("confirmPassword")}</label>
        <input
          type="password"
          className={inputClass}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-[#2A2724] py-4 font-semibold text-white transition hover:bg-[#96603D] disabled:opacity-50"
      >
        {status === "loading" ? t("saving") : t("resetPassword")}
      </button>
    </form>
  );
}