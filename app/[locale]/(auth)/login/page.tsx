"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const t = useTranslations("Login");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`Login failed with status ${res.status}`);

      // TODO: redirect to home or dashboard after successful login
    } catch (err) {
      console.error("Login failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#F0ECE4] flex items-center justify-center min-h-screen px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm flex flex-col gap-4"
      >
        <h1 className="font-serif text-2xl text-center text-[#2A2724]">{t("brand")}</h1>
        <h2 className="text-xl text-center text-[#2A2724]">{t("welcomeBack")}</h2>
        <p className="text-sm text-center text-[#8A8478]">{t("signInDescription")}</p>

        <div>
          <label htmlFor="email" className="text-xs font-medium text-[#8A8478]">
            {t("emailAddress")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8764F]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-xs font-medium text-[#8A8478]">
              {t("password")}
            </label>
            <Link href="/resetpass" className="text-xs text-[#B8764F]">
              {t("forgotPassword")}
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="......."
            value={form.password}
            onChange={handleChange}
            required
            className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#49413d]"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600 text-center">{t("loginError")}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 rounded-md bg-[#2A2724] px-4 py-2 text-sm font-medium text-white hover:bg-[#3f3e3d] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? t("signingIn") : t("signIn")}
        </button>

        <div className="flex items-center gap-2 text-xs text-[#8A8478]">
          <span className="flex-1 border-t border-[#E9DECC]" />
          {t("or")}
          <span className="flex-1 border-t border-[#E9DECC]" />
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-[#E9DECC] px-4 py-2 text-sm hover:bg-[#F7F4EE] transition-colors"
        >
          <FcGoogle size={18} /> {t("continueWithGoogle")}
        </button>

        <p className="text-sm text-center text-[#8A8478]">
          {t("dontHaveAccount")}{" "}
          <Link href="/registers" className="text-[#B8764F] font-medium">
            {t("signUp")}
          </Link>
        </p>
      </form>
    </section>
  );
}