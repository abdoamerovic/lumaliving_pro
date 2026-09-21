import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Browse() {
  const t = useTranslations("Category");

  return (
    <section className="flex h-70 items-center justify-center bg-[#F7F4EE]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 text-xl font:bold px-3 md:text-2xl">
        <p>{t("titlelast")}</p>

        <Link
          href="/products"
          className="flex h-10 w-33 items-center justify-center bg-black text-sm text-amber-50 hover:bg-[#4b4a4a]"
        >
          {t("toProduct")}
        </Link>
      </div>
    </section>
  );
}