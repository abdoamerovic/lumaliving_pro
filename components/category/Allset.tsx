import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const categories = [
  {
    slug: "storage",
    image: "/hero_image/storage.jpg",
    name_key: "storage",
  },
  {
    slug: "beds",
    image: "/hero_image/bed.webp",
    name_key: "beds",
  },
  {
    slug: "lighting",
    image: "/hero_image/line_light_2.avif",
    name_key: "lighting",
  },
  {
    slug: "tables",
    image: "/hero_image/coffee_table_1.avif",
    name_key: "tables",
  },
  {
    slug: "chairs",
    image: "/hero_image/chair_1.avif",
    name_key: "chairs",
  },
  {
    slug: "sofas",
    image: "/hero_image/sofra_1.avif",
    name_key: "sofas",
  },
] as const;

export default function CategoryGlanceStrip() {
  const t = useTranslations("Category");
  const locale = useLocale();

  return (
    <section className="w-full bg-[#f0ece4] py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold text-[#2b241d] sm:text-2xl md:text-3xl">
          {t("categoryGlance.title")}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 md:mt-10 md:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${locale}/category/${category.slug}`}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <Image
                src={category.image}
                alt={t(`categoryGlance.${category.name_key}`)}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black/60 to-transparent sm:h-16" />

              <span className="absolute inset-x-2 bottom-2 text-xs font-medium text-white sm:inset-x-3 sm:bottom-3 sm:text-sm">
                {t(`categoryGlance.${category.name_key}`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}