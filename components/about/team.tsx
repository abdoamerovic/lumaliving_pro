import Image from "next/image";
import { getTranslations } from "next-intl/server";

const team = [
  { key: "member1", image: "/hero_image/ceo_1.jpg" },
  { key: "member2", image: "/hero_image/ceol_2.png" },
  { key: "member3", image: "/hero_image/ceol_3.png" },
] as const;

export async function TeamSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "team" });

  return (
    <section className="bg-[#faf8f5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.15em] text-[#C97B5A] mb-3 uppercase">
          {t("badge")}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-12">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {team.map(({ key, image }) => (
            <div key={key}>
              <div className="relative aspect-square w-40 mx-auto overflow-hidden rounded-sm mb-4">
                <Image
                  src={image}
                  alt={t(`${key}.name`)}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <p className="font-serif text-base text-[#1A1A1A]">
                {t(`${key}.name`)}
              </p>
              <p className="mt-1 text-sm text-[#B8764F]">
                {t(`${key}.role`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;