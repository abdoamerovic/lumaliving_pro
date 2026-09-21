import { getTranslations } from "next-intl/server";
import ForgotPasswordForm from "@/components/password/forgot-password-form";

export default async function ForgotPasswordPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "auth" });

  return (
    <section className="w-full bg-[#F7F4EE] py-16 min-h-screen">
      <div className="mx-auto max-w-md px-4">
        <h1 className="mb-2 font-serif text-2xl text-[#2A2724]">{t("forgotPasswordTitle")}</h1>
        <p className="mb-6 text-sm text-[#8A8478]">{t("forgotPasswordSubtitle")}</p>
        <ForgotPasswordForm />
      </div>
    </section>
  );
}