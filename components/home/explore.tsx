import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Explore() {
  const t=useTranslations("explore")
  return (
    <section className="bg-[#2A2826] py-10 md:py-14 mb-6  ">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Text side */}
        <div className="flex flex-col max-w-md mx-auto md:mx-0 px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C99A6C] mb-4 uppercase">
            {t("brand")}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.15] text-white mb-6">
             {t("title")}
          </h1>

          <p className="text-base text-[#B5B2AC] leading-relaxed mb-8">
             {t("description")}
          </p>

          <Link className="w-full md:w-50 px-6 py-3 bg-[#B48354] text-white text-sm font-semibold hover:bg-[#A3774B] transition-colors md:text-center" href={"/products"}>
             {t("button")}
          </Link>
        </div>

        {/* Image side */}
        <div className="relative aspect-4/3 md:aspect-16/13 w-full overflow-hidden">
          <Image
            src="/hero_image/explore_img.avif"
            alt="Modern living room with sectional sofa and warm lighting"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}