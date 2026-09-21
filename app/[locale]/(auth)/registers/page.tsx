"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export  default function Registers() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    
  };
  const t = useTranslations("Register");
  return (
    <section className="bg-[#F0ECE4] flex items-center justify-center min-h-screen px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm flex flex-col gap-4"
      >
        <h1 className="font-serif text-2xl text-center text-[#2A2724]">{t("brand")}</h1>
        <h2 className="text-xl font-bold  text-[#2A2724]">{t("createAccount")}</h2>
        <p className="text-sm  text-[#8A8478]">{t("joinLumaLiving")}</p>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="text-xs font-medium text-[#8A8478]">
              {t("firstName")}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="john"
              required
              className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8764F]"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="text-xs font-medium text-[#8A8478]">
              {t("lastName")}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Cina"
              className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8764F]"
            />
          </div>
        </div>

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
          <label htmlFor="password" className="text-xs font-medium text-[#8A8478]">
            {t("password")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="......."
            value={form.password}
            onChange={handleChange}
            required
            className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8764F]"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="text-xs font-medium text-[#8A8478]">
            {t("confirmPassword")}
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="......."
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full mt-1 rounded-md border border-[#E9DECC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#333333]"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="mt-2  bg-[#2A2724] px-4 py-2 text-sm font-medium text-white hover:bg-[#514e4d] transition-colors"
        >
          {t("createAccountButton")}
        </button>

        <p className="text-sm text-center text-[#8A8478]">
          {t("alreadyHaveAccount")}
          <Link href="/en/login" className="text-[#B8764F] font-medium">
            {t("signIn")}
          </Link>
        </p>
      </form>
    </section>
  );
}