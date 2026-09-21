import CheckoutContent from "@/components/checkout/checkout-content";
import { getTranslations } from "next-intl/server";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "checkout" });

  return (
    <section className="bg-[#F7F4EE] py-10 min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-2xl font-bold text-[#2A2724]">{t("title")}</h1>
        <CheckoutContent />
      </div>
    </section>
  );
}