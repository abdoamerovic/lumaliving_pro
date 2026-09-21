import { Aside } from "@/components/shop/Aside";
import { Shopping } from "@/components/shop/allproduct";
import { SortSelect } from "@/components/shop/SortSelect";
import { SORT_OPTIONS, type SortValue } from "@/lib/shop/sort";
import { products } from "@/lib/data/products";
import { getTranslations } from "next-intl/server";

// category (from the Aside / URL)  ->  the `type` value used in your products data
const types = {
  sofas: "sofa",
  chairs: "chair",
  tables: "table",
  lighting: "light",
  beds: "bed",
  storage: "storage",
} as const;

type Category = keyof typeof types;

export default async function Products({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; sort?: string }>;
}) {
  const { locale } = await params;
  const { category: raw, sort: rawSort } = await searchParams;

  // Unknown or missing category -> undefined -> show all products
  const category =
    raw && Object.hasOwn(types, raw) ? (raw as Category) : undefined;
  const type = category ? types[category] : undefined;

  // Unknown sort value -> "default"
  const sort: SortValue = SORT_OPTIONS.includes(rawSort as SortValue)
    ? (rawSort as SortValue)
    : "default";

  const t = await getTranslations({ locale, namespace: "product" });
  const tShop = await getTranslations({ locale, namespace: "shop" });

  const count = type
    ? products.filter((p) => p.type === type).length
    : products.length;

  return (
    <section className="bg-[#F7F4EE] px-4 md:px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="font-serif text-3xl text-[#2A2724]">{tShop("title")}</h1>
          <p className="mt-1 text-sm text-[#8A8478]">
            {tShop("productsCount", { count })}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Aside active={category ?? "all"} />
          <div className="flex-1 flex flex-col gap-4">
            <SortSelect value={sort} category={category} />

            {/* No type -> all products (default). With a type -> only that category. */}
            <Shopping
              locale={locale}
              type={type}
              sort={sort}
              t={{
                furniture: t("furniture"),
                addToCart: t("addToCart"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
