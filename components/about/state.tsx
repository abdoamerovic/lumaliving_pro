import { getTranslations } from "next-intl/server";

const stats = ["founded", "countries", "happyHomes", "sustainable"] as const;

export async function AboutStats({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="bg-[#F0ECE4] py-12 ">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {stats.map((key) => (
            <div key={key}>
              <p className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                {t(`${key}.value`)}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[#8A8478]">
                {t(`${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStats;