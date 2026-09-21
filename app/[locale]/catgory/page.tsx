import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/category/padgeheader";
import Sofra from "@/components/category/sofra";
import Chair from "@/components/category/Chair";
import Table from "@/components/category/table";
import Bed from "@/components/category/bed";
import Light from "@/components/category/light"
import Storage from "@/components/category/storgecard"
import CategoryGlanceStrip from "@/components/category/Allset";
import Browse from "@/components/category/brawse"
export default async function Category({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Category" });

  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <PageHeader
        breadcrumbs={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("breadcrumbCategories") },
        ]}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 ">
        <Sofra productCount={2} />
        <Chair productCount={2} />
        <Table productCount={3} />
        <Bed productCount={1} />
        <Light productCount={3}/>
        <Storage productCount={2}/>
        
      </div>
      <CategoryGlanceStrip/>
      <Browse/>
    </main>
  );
}