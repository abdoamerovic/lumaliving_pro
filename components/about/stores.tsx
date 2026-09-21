import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function AboutHero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="relative h-[70vh] min-h-125 w-full overflow-hidden">
      <Image
        src="/hero_image/first.webp"
        alt={t("title")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#C99A6C] uppercase mb-4">
          {t("badge")}
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-white max-w-3xl">
          {t("title")}
        </h1>

        <p className="mt-6 text-sm sm:text-base text-white/80 max-w-xl">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}

export default AboutHero;