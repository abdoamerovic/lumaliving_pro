import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export  async function Collection() {
  const t = await getTranslations("collection");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-12 mx-auto max-w-7xl">
      <div className="relative order-1 md:order-2 h-[60vh] min-h-80 md:h-125 lg:h-150">
        <Image
          src="/hero_image/hero_1.avif"
          alt="Modern living room at dusk with floor-to-ceiling windows and a sectional sofa"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center lg:px-8 px-6 py-20 bg-[#faf8f5] order-2 md:order-1">
        <div className="max-w-md mx-auto md:mx-0">
          <p className="text-xs font-semibold tracking-[0.15em] text-[#C97B5A] mb-4">
            {t("badge")}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1A1A1A] mb-6">
            {t("badge")}
            <br />
            {t("title")}
          </h1>

          <p className="text-base text-[#4A4A46] mb-10">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/products" className="w-full sm:w-auto px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#4f4a4a] transition-colors">
              {t("shopButton")}
            </Link>
            <Link href="/catgory" className="w-full sm:w-auto px-8 py-3 border border-b-black bg-[#faf8f5] text-[#1A1A1A] text-sm font-medium  hover:bg-black/5 transition-colors">
              {t("exploreButton")}
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}