import { getTranslations } from "next-intl/server";
import { RiTimeLine, RiPencilRulerLine, RiLeafLine, RiUserHeartLine } from "react-icons/ri";

const values = [
  { key: "quality", Icon: RiTimeLine },
  { key: "design", Icon: RiPencilRulerLine },
  { key: "sustainability", Icon: RiLeafLine },
  { key: "humanCentered", Icon: RiUserHeartLine },
] as const;

export async function OurValues({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "ourValues" });

  return (
    <section className="bg-[#faf8f5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] text-[#C97B5A] mb-3 uppercase">
            {t("badge")}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {values.map(({ key, Icon }) => (
            <div key={key}>
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#EFE9DE] text-[#B8764F] mb-4 hover:text-[#EFE9DE] hover:bg-[#B8764F] duration-300">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-[#4A4A46] leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;