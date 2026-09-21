"use client";

import { useMemo } from "react";
import { Review } from "@/types/reviews";
import { reviewsEn } from "@/components/details/reviews/reviewen";
import { reviewsAr } from "../reviews/reviewar";
import { useLocale } from "next-intl";

interface ReviewsProps {
  product: {
    id: number;
    type: "sofa" | "chair" | "table" | "light" | "bed";
  };
}
export default function Reviews({ product }: ReviewsProps) {
  const locale = useLocale();
  const lang = locale === "en" ? reviewsEn : reviewsAr;

  const productReviews = useMemo(() => {
    const filteredReviews = lang.filter(
      (review: Review) => review.type === product.type
    );

    return [...filteredReviews]
      .sort((a, b) => a.id - b.id)
      .slice(0, 3);
  }, [lang, product.type]);

  return (
    <section className="w-full py-12">
      <div className="space-y-6">
        {productReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6"
          >
            <div className="flex items-center justify-between">
              
                <div className="flex gap-2" >
                   <h3 className="font-semibold text-[#a67c52] w-9 h-9 rounded-full bg-[#eae8eaca] text-center flex items-center justify-center">
                    {review.img}
                  </h3>
                <div>
                <h3 className="font-semibold text-[#2A2724]">
                {review.name}
                </h3>
                <div className="text-[#B8764F]">
                  {"★".repeat(review.rating)}
                </div>

              </div>

              
              </div>
              
              
            </div>

            <p className="mt-3 text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}