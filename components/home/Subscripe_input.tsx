"use client";
import { useTranslations } from "next-intl";
export function SubscripeInput() {
    const t=useTranslations("subscribe")
    return (
        <div className=" grid grid-cols-[80%_20%] gap-1  w-full max-w-md">
            <input
                type="email"
                placeholder={t("placeholder")}
                className=" col-start-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8764F] focus:border-transparent"
            />

            <button className=" col-start-2  bg-[#2A2826] text-white rounded-md hover:bg-[#96603D] transition-colors flex items-center justify-center ">
                {t("button")}
            </button>
        </div>
    );
}