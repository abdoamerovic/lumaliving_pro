import { products } from "@/lib/data/products";
import Alldetails from "@/components/details/Alldetails";
import Breadcrumb from "@/components/details/Bredcrumb";
import FullImage from "@/components/details/fullImage";
import { notFound } from "next/navigation";
import ProductTabs from "@/components/details/productTab";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id, locale } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }
  return (
<section className="bg-[#F7F4EE] py-10 min-h-screen">
  <div className="mx-auto max-w-7xl px-3">
    
    <Breadcrumb />

    <div className="grid md:grid-cols-2">
      <FullImage params={{ id }} />
      <Alldetails params={Promise.resolve({ id, locale })} />
    </div>

    <div className="mt-10 w-full text-[#e8e0d3]">
      <hr className="w-full" />
    </div>
    <ProductTabs
      product={product as Parameters<typeof ProductTabs>[0]["product"]}
      specification={locale === "ar" ? product.spesifcation_ar : product.spesifcation_en}
      description={locale === "ar" ? product.descripetion_ar : product.descripetion_en}
    />
    

  </div>
</section>
  );
}