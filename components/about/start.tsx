import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function AboutStory({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="bg-[#faf8f5] py-16 md:py-24">
      <div className=" px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-[#C97B5A] mb-4 uppercase">
              {t("badge")}
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-[#1A1A1A] mb-6">
              {t("title")}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A4A46] leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>
          </div>

          {/* Images side */}
          <div className="relative h-80 sm:h-100 md:h-112.5">
            <div className="absolute left-0 top-15 w-[49%] h-[75%] overflow-hidden rounded-sm">
              <Image
                src="/hero_image/secand.png"
                alt={t("title")}
                fill
                sizes="(max-width: 768px) 52vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[49%] h-[70%] overflow-hidden rounded-sm">
              <Image
                src="/hero_image/thired_images.jfif"
                alt={t("title")}
                fill
                sizes="(max-width: 768px) 52vw, 26vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;