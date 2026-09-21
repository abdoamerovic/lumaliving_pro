"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/products";

interface ProductDetailsProps {
  product: Product;
}

export default function Reactdetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);
  const t = useTranslations("cart");

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-[#E9DECC] rounded-md">
          <button
            onClick={decrement}
            className="px-3 py-2 text-[#2A2724] hover:bg-[#dedcd8]"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 text-sm">{quantity}</span>
          <button
            onClick={increment}
            className="px-3 py-2 text-[#2A2724] hover:bg-[#e6e4e0]"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3 flex-col md:flex-row">
        <button
          onClick={handleAddToCart}
          className="flex-1 border border-[#2A2724] px-6 py-3 text-sm font-medium text-[#2A2724] hover:bg-[#2A2724] hover:text-white transition-colors"
        >
          {t("title")}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-[#2A2724] px-6 py-3 text-sm font-medium text-white hover:bg-[#B8764F] transition-colors"
        >
          {t("addNow")}
        </button>
      </div>

      <Link
        href="/wishlist"
        className="flex items-center gap-2 text-sm text-[#8A8478] hover:text-[#B8764F] transition-colors mb-6"
      >
        <CiHeart size={18} />
        {t("addwishlist")}
      </Link>
    </div>
  );
}