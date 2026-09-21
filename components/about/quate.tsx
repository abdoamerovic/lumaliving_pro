import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function QuoteSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "quote" });

  return (
    <section className="relative h-70 sm:h-80 w-full overflow-hidden">
      <Image
        src="/hero_image/last.webp"
        alt={t("text")}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white max-w-2xl">
          &ldquo;{t("text")}&rdquo;
        </p>
        <p className="mt-4 text-xs sm:text-sm text-[#C99A6C]">
          {t("author")}
        </p>
      </div>
    </section>
  );
}

export default QuoteSection;