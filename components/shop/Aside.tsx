import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const categories = [
  "all",
  "sofas",
  "chairs",
  "tables",
  "lighting",
  "beds",
  "storage",
] as const;

// `active` comes from the page (the ?category= value, or "all")
export function Aside({ active = "all" }: { active?: string }) {
  const t = useTranslations("aside");

  const hrefFor = (key: string) =>
    key === "all" ? "/products" : `/products?category=${key}`;

  return (
    <aside className="w-full md:w-56 shrink-0">
      {/* Mobile: horizontal scrollable pills */}
      <ul className="flex md:hidden gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {categories.map((key) => {
          const isActive = active === key;
          return (
            <li key={key}>
              <Link
                href={hrefFor(key)}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={`block whitespace-nowrap px-4 py-2 text-sm rounded-md border transition-colors ${
                  isActive
                    ? "bg-[#2A2724] text-white border-[#2A2724]"
                    : "border-[#E9DECC] text-[#2A2724]"
                }`}
              >
                {t(key)}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Desktop: vertical sidebar list */}
      <ul className="hidden md:flex flex-col gap-2">
        {categories.map((key) => {
          const isActive = active === key;
          return (
            <li key={key}>
              <Link
                href={hrefFor(key)}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={`block px-4 py-2 text-sm rounded-md border transition-colors ${
                  isActive
                    ? "bg-[#2A2724] text-white border-[#2A2724]"
                    : "border-[#E9DECC] text-[#2A2724] hover:border-[#2A2724]"
                }`}
              >
                {t(key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
