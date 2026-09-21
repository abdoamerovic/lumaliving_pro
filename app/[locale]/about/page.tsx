import AboutHero from "@/components/about/start";
import AboutStory from "@/components/about/stores";
import AboutStats from "@/components/about/state";
import OurValues from "@/components/about/ourvalues";
import TeamSection from "@/components/about/team";
import QuoteSection from "@/components/about/quate";
import AboutCta from "@/components/about/cta";

export default async function about({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="text-[#faf8f5] bg-[#F5F5F5]">
  <AboutStory locale={locale} />

  <div className="mx-auto max-w-7xl">
    <AboutHero locale={locale} />
    </div>


    
  <AboutStats locale={locale} />
    
    <div>
    <OurValues locale={locale} />
    <TeamSection locale={locale} />
  </div>

  <QuoteSection locale={locale} />
  <AboutCta locale={locale} />
</main>
  );
}