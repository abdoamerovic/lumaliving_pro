"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { SortValue } from "@/lib/shop/sort";

// `value` and `category` come from the page (the URL), so this select
// always matches the URL and keeps the chosen category when the sort changes.
export function SortSelect({
  value,
  category,
}: {
  value: SortValue;
  category?: string;
}) {
  const tShop = useTranslations("shop");
  const router = useRouter();

  const onChange = (next: string) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (next !== "default") params.set("sort", next);

    const qs = params.toString();
    router.push(qs ? `/products?${qs}` : "/products", { scroll: false });
  };

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-48 self-end rounded-md border border-[#E9DECC] px-4 py-2 text-sm text-[#2A2724] focus:outline-none focus:ring-2 focus:ring-[#B8764F]"
    >
      <option value="default">{tShop("sortDefault")}</option>
      <option value="price-low">{tShop("sortPriceLow")}</option>
      <option value="price-high">{tShop("sortPriceHigh")}</option>
      <option value="name">{tShop("sortName")}</option>
      <option value="rating">{tShop("sortRating")}</option>
    </select>
  );
}

export default SortSelect;