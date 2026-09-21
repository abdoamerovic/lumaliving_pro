"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { products } from "@/lib/data/products";

const types = {
  sofa: "sofas",
  chair: "chairs",
  table: "tables",
  light: "lighting",
  bed: "beds",
  storage: "storage",
} as const;

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const locale = useLocale();
  const t = useTranslations("nav");
  const place = locale === "ar" ? "ادخل محتوى" : "enter content";
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();


  const matchedCategories = normalizedQuery
    ? Object.entries(types).filter(([typeKey, categoryKey]) =>
        typeKey.includes(normalizedQuery) || categoryKey.includes(normalizedQuery),
      )
    : [];

  const matchedProducts = normalizedQuery
    ? products
        .filter((p) => {
          const name = locale === "ar" ? p.name_ar : p.name_en;
          return name.toLowerCase().includes(normalizedQuery);
        })
        .slice(0, 5)
    : [];

  const handleCategorySelect = (categoryKey: string) => {
    router.push(`/products?category=${categoryKey}`);
    setQuery("");
    setIsOpen(false);
  };

  const handleProductSelect = (id: number) => {
    router.push(`/products/${id}`);
    setQuery("");
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (matchedCategories.length > 0) {
      handleCategorySelect(matchedCategories[0][1]);
    }
  };

  return (
    <div ref={containerRef} className="relative md:mt-2 mt-1">
      {isOpen ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-1">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={place}
            className="w-40 sm:w-56 rounded-md border border-[#E9DECC] bg-white px-3 py-1.5 text-sm text-[#2A2724] placeholder:text-[#B8ADA0] focus:outline-none focus:ring-1 focus:ring-[#B8764F]"
          />
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            aria-label="Close search"
            className="text-lg text-[#8A8478]"
          >
            <IoIosClose />
          </button>
        </form>
      ) : (
        <button onClick={() => setIsOpen(true)} aria-label="Open search" className="text-lg">
          <IoIosSearch />
        </button>
      )}

      {isOpen && normalizedQuery && (matchedCategories.length > 0 || matchedProducts.length > 0) && (
        <div className="absolute top-full mt-2 w-64 rounded-md border border-[#E9DECC] bg-white shadow-md z-50">
          {matchedCategories.length > 0 && (
            <div className="border-b border-[#E9DECC] py-2">
              <p className="px-3 pb-1 text-[11px] font-medium uppercase tracking-wide text-[#8A8478]">
                {t("categoriesLabel")}
              </p>
              {matchedCategories.map(([typeKey, categoryKey]) => (
                <button
                  key={typeKey}
                  onClick={() => handleCategorySelect(categoryKey)}
                  className="block w-full px-3 py-2 text-start text-sm text-[#2A2724] hover:bg-[#F7F4EE]"
                >
                  {t(`categories.${categoryKey}`)}
                </button>
              ))}
            </div>
          )}

          {matchedProducts.length > 0 && (
            <div className="py-2">
              <p className="px-3 pb-1 text-[11px] font-medium uppercase tracking-wide text-[#8A8478]">
                {t("products")}
              </p>
              {matchedProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProductSelect(p.id)}
                  className="block w-full px-3 py-2 text-start text-sm text-[#2A2724] hover:bg-[#F7F4EE]"
                >
                  {locale === "ar" ? p.name_ar : p.name_en}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}