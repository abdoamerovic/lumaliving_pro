import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type StorageProps = {
  productCount: number;
};

export default async function Storage({ productCount }: StorageProps) {
  const t = await getTranslations("Category");

  return (
    <article className="group relative grid border border-[#D9C3A0] bg-white md:min-h-130 md:grid-cols-[2fr_3fr] my-6">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden md:aspect-auto md:order-1">
        <Image
          src="/hero_image/storage.jpg"
          alt={t("storage.name")}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:order-2">
        <span
          aria-hidden="true"
          className="mb-6 block h-8 w-1 bg-[#C9B08A]"
        />

        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A8178]">
          {t("productCount", { count: productCount })}
        </p>

        <h2 className="mt-3 font-serif text-3xl font-medium text-[#1F1D1A]">
          {t("storage.name")}
        </h2>

        <p className="mt-4 max-w-md text-base leading-relaxed text-[#4A453F]">
          {t("storage.description")}
        </p>

        <Link
          href="/products?category=storage"
          className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#A67C52] after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-[#A67C52]"
        >
          {t("shopNow")}

          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10h14M11 4l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}