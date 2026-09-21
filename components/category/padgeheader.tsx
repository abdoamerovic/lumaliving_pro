import { Link } from "@/i18n/navigation"; // locale-aware Link from next-intl

export type Breadcrumb = {
  label: string;
  href?: string; // omit on the last item (current page)
};

export type PageHeaderProps = {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="bg-[#EFEAE2] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[#8A8178]">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={crumb.href ?? crumb.label} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[#2D2A26]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className="text-[#2D2A26]"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <span aria-hidden="true" className="text-[#B5ADA3]">
                      /
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Eyebrow */}
        <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[#A67C52]">
          {eyebrow}
        </p>

        {/* Title */}
        <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-[#2D2A26] md:text-6xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base text-[#4A453F] md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}