"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Category {
  key: "sofas" | "chairs" | "tables" | "lighting";
  count: string;
  image: string;
}

const categories: Category[] = [
  {
    key: "sofas",
    count: "2 ",
    image: "/hero_image/sofra_1.avif",
  },
  {
    key: "chairs",
    count: "2 ",
    image: "/hero_image/chair_1.avif",
  },
  {
    key: "tables",
    count: "3 ",
    image: "/hero_image/nest_1.avif",
  },
  {
    key: "lighting",
    count: "3 ",
    image: "/hero_image/line_light_1.avif",
  },
];

export function Looking() {
  const t = useTranslations("looking");

  return (
    <section className="bg-[#f0ece4] py-16 px-2 md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-4xl text-[#2A2724]">{t("title")}</h2>
          <Link
            href="/products"
            className="group flex items-center gap-1 text-sm text-[#B8764F] transition-colors hover:text-[#96603D]"
          >
            {t("seeAll")}
          </Link>
        </div>

        <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.key}
              href={`/products?category=${category.key}`}
              className="group relative aspect-3/4 overflow-hidden rounded-sm"
            >
              <Image
                src={category.image}
                alt={t(`categories.${category.key}`)}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute bottom-0 right-0 p-5 text-sm text-white">
                <p className="font-serif text-xl">
                  {t(`categories.${category.key}`)}
                </p>
                {category.count} {t("items")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

