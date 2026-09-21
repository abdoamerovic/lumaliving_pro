"use client"
import Reviews from "@/components/details/tabs/Reviews"
import Description from "@/components/details/tabs/Description"
import Specification from "@/components/details/tabs/specifiction"
import { useState, type ComponentProps } from "react"
import { useTranslations } from "next-intl"

type ProductTabsProps = {
  specification: ComponentProps<typeof Specification>["specification"]
  description: ComponentProps<typeof Description>["description"]
  product: ComponentProps<typeof Reviews>["product"]
}

export default function ProductTabs({
  specification,
  description,
  product,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] =
    useState<"specifications" | "details" | "reviews">("specifications");

  const tabs = {
    specifications: <Specification specification={specification} />,
    details: <Description description={description} />,
    reviews: <Reviews product={product} />,
  };
  const t=useTranslations("tabs")

  return (
    <div>
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab("specifications")}
          className={
            activeTab === "specifications"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          {t("description")}
        </button>

        <button
          onClick={() => setActiveTab("details")}
          className={
            activeTab === "details"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          {t("specifications")}
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={
            activeTab === "reviews"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          {t("reviews")}
        </button>
      </div>

      <div className="mt-6">
        {tabs[activeTab]}
      </div>
    </div>
  );
}