import {Collection} from "@/components/home/collection";
import { Looking}from "@/components/home/looking";
import {Shopping} from "@/components/home/shopping";
import {Explore} from "@/components/home/explore";
import {Subscribe} from "@/components/home/Subscripe"
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "product" });

  return (
    <main className="bg-[#faf8f5]">
      <Collection />
      <Looking />

      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center w-full">
          <h2 className="font-serif text-3xl text-[#2A2724]">{t("featuredProducts")}</h2>
          <p className="mt-2 text-sm text-[#8A8478]">{t("Curated")}</p>
        </div>
      </div>

      <Shopping
        locale={locale}
        t={{ furniture: t("furniture"), addToCart: t("addToCart") }}
      />

      <div className="m-5 flex justify-center">
        <Link
          className="rounded-md border border-[#2A2724] px-6 py-2 text-sm font-medium text-[#2A2724] transition-colors hover:bg-[#2A2724] hover:text-white"
          href="/products"
        >
          {t("more")}
        </Link>
      </div>

      <Explore />
      <Subscribe />
    </main>
  );
}
