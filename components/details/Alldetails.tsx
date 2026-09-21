import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import Reactdetails from "@/components/details/Reactdetails";


export default async function Alldetails({
  params,
}: {
  params: Promise<{ id: string ,locale:string}>;
}) {
  const { id,locale } = await params;
  const product = products.find((p) => p.id === Number(id));
  

  if (!product) {
    notFound();
  }
  const productType = locale === "ar" ? product.typear : product.type;
  const productName = locale === "ar" ? product.name_ar : product.name_en;
  const productReview = locale === "ar" ? product.reviewar : product.review;
  const productavailability = locale === "ar" ? product.availabilityar : product.availability;
  const productcolor = locale === "ar" ? "اللون" : "color";
  return (
    <section className=" max-w-3xl px-4 py-10  font-bold">
      <p className="text-xs font-medium tracking-wide text-[#B8764F]">
        {productType}
      </p>
      <h1 className="mt-2 font-serif text-3xl text-[#2A2724] py-3">
        {productName}
      </h1>

      <div className="mt-1 flex items-center gap-2 text-sm text-[#8A8478]">
        <span>{productReview} reviews</span>
        <span>•</span>
        <span
          className={
            product.availability ? "text-green-600" : "text-red-600"
          }
        >
          {productavailability}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-[#2A2724] py-3">{productcolor}</h3>
        <div className=" flex gap-2">
          {product.color.map((c,index)=>(
            <button 
            key={index}
            aria-label={` Select color ${c}`}
            className=" h-8 w-8  rounded-full transition-transform hover:scale-110 border hover:border-2 hover:border-amber-900 "
            style={{backgroundColor:c}}
            
            ></button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Reactdetails product={product}  />
      </div>
    </section>
  );
}