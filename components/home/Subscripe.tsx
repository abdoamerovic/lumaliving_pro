import { SubscripeInput } from "@/components/home/Subscripe_input";
import { useTranslations } from "next-intl";
export function Subscribe() {
  const t=useTranslations("subscribe")
  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-serif">{t("title")}</h1>
        <p className="text-[#4a4a4a] text-sm max-w-md">
          {t("description")}
        </p>
        <SubscripeInput />
      </div>
    </section>
  );
}