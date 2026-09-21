import CartDetails from "@/components/cart/cartId";
import Checkout from "@/components/cart/Checkout";
import { getTranslations } from "next-intl/server";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"] });

export default async function Cart({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <section className=" bg-[#F7F4EE] py-10 min-h-screen">
      <div className="mx-auto max-w-7xl">
      <div >
        <h1 className={`${merriweather.className} text-3xl py-6 font-bold px-2`}>
          {t("cart.title")}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-2">
        <div className="lg:col-span-2">
          <CartDetails />
        </div>
        <div>
          <Checkout />
        </div>
      </div>
      </div>
    </section>
  );
}