
"use client";

import { products } from "@/lib/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FullImage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  const handleImageClick = (image: string) => {
    const clickedProduct = products.find((p) => p.image === image);

    if (clickedProduct) {
      router.push(`/products/${clickedProduct.id}`);
    }
  };

  return (
    <section>
      {/* Main Image */}
      <div className="relative aspect-square w-full max-w-2xl">
        <Image
          src={product.image}
          alt={product.name_en}
          fill
          className="object-cover"
        />
      </div>

      {/* Small Images */}
      <div className="flex gap-2 mt-4">
        {product.images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleImageClick(image)}
            className="relative h-24 w-24 overflow-hidden"
          >
            <Image
              src={image}
              alt={`${product.name_en} - ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
