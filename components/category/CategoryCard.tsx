import Image from "next/image";
import { Link } from "@/i18n/navigation"; // locale-aware Link from next-intl

export type CategoryCardProps = {
  href: string;
  image: string;
  imageAlt: string;
  productCountLabel: string; // e.g. "2 Products" (already translated)
  title: string;
  description: string;
  ctaLabel: string; // e.g. "Shop now"
  imageSide?: "start" | "end"; // "end" flips the image to the other side
  priority?: boolean; // set on the first card so it loads eagerly
};

export default function CategoryCard({
  href,
  image,
  imageAlt,
  productCountLabel,
  title,
  description,
  ctaLabel,
  imageSide = "start",
  priority = false,
}: CategoryCardProps) {
  const imageAtEnd = imageSide === "end";

  return (
    <article className="group relative grid overflow-hidden border border-[#D9C3A0] bg-white md:min-h-130 md:grid-cols-[2fr_3fr]">
      {/* Image */}
      <div
        className={`relative aspect-4/3 md:aspect-auto ${
          imageAtEnd ? "md:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-12">
        <span aria-hidden="true" className="mb-6 block h-8 w-1 bg-[#C9B08A]" />

        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A8178]">
          {productCountLabel}
        </p>

        <h2 className="mt-3 font-serif text-3xl font-medium text-[#1F1D1A]">
          {title}
        </h2>

        <p className="mt-4 max-w-md text-base leading-relaxed text-[#4A453F]">
          {description}
        </p>

        {/* The ::after stretches this link over the whole card, so the entire card is clickable */}
        <Link
          href={href}
          className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#A67C52] after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#A67C52] focus-visible:after:ring-inset"
        >
          {ctaLabel}
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
