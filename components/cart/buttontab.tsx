"use client"
import Reviews from "@/components/details/tabs/Reviews"
import Description from "@/components/details/tabs/Description"
import Specification from "@/components/details/tabs/specifiction"
import { useState, type ComponentProps } from "react"

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
    useState<"share" | "details" | "reviews">("share");

  const tabs = {
    share: <Specification specification={specification} />,
    details: <Description description={description} />,
    reviews: <Reviews product={product} />,
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab("share")}
          className={
            activeTab === "share"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          Share
        </button>

        <button
          onClick={() => setActiveTab("details")}
          className={
            activeTab === "details"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          Details
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={
            activeTab === "reviews"
              ? "border-b-2 border-black pb-2"
              : "pb-2"
          }
        >
          Reviews
        </button>
      </div>

      {/* Active Component */}
      <div className="mt-6">
        {tabs[activeTab]}
      </div>
    </div>
  );
}