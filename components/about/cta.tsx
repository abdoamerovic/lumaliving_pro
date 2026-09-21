import Link from "next/link";

import { getTranslations } from "next-intl/server";

export async function AboutCta({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "aboutCta" });

  return (
    <section className="bg-[#faf8f5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-3">
          {t("title")}
        </h2>
        <p className="text-sm text-[#8A8478] mb-8">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={"/products"}
            className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
          >
            {t("shopButton")}
          </Link>
          <Link
            href={"/catgory"}
            className="px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium hover:bg-black/5 transition-colors"
          >
            {t("exploreButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCta;