"use client";
import { useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";


import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useCartStore } from "@/store/cartStore";
import LanguageSwitcher from "@/components/Navbar/LanguageSwitcher"
import { CiHeart } from "react-icons/ci";
import SearchBar from "@/components/Navbar/SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const cart = useCartStore((state) => state.cart);
  const wishlist = useCartStore((state) => state.wishlist);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full h-16.25 bg-[#faf8f5] border-b border-[#e9decc]">
      <div className="mx-auto max-w-7xl h-full flex flex-row justify-between items-center px-4 md:px-4">
        <Link href="/"className="
  shadow-[0_-2px_6px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-2xl font-bold text-[#1f1f1f] p-0.5">{t("brand")}</h2>
        </Link>

        <ul className="hidden md:flex flex-row gap-4 lg:gap-8 justify-center items-center text-sm">
          <li><Link href="/">{t("home")}</Link></li>
          <li><Link href={`/products`}>{t("shop")}</Link></li>
          <li><Link href={`/catgory`}>{t("category")}</Link></li>
          <li><Link href={`/about`}>{t("about")}</Link></li>
        </ul>

        <div className="flex flex-row gap-4 items-center text-lg ">
          <SearchBar />
          <Link href={`/wishlist`} className="relative">
            <CiHeart/>
            {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B8764F] text-[10px] font-bold text-white">
            {wishlistCount}
            </span>
            )}
          </Link>
          
          <Link href={`/cart`} className="relative">
            <AiOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B8764F] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
            

          </Link>
          <Link href={`/login`} className="hidden md:block text-sm font-light">
            {t("login")}
          </Link>
          <div className=" hidden md:block border border-[#C99A6C] text-[#C99A6C] w-8 px-2 md:ml-4"><LanguageSwitcher/></div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16.25 left-0 w-full bg-[#faf8f5] border-b border-[#e9decc] md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-sm ">
            <li><Link href="/" onClick={() => setIsOpen(false)}>{t("home")}</Link></li>
            <li><Link href={`/products`} onClick={() => setIsOpen(false)}>{t("shop")}</Link></li>
            <li><Link href={`/catgory`} onClick={() => setIsOpen(false)}>{t("category")}</Link></li>
            <li><Link href={`/about`} onClick={() => setIsOpen(false)}>{t("about")}</Link></li>
            <li><Link href={`/login`} onClick={() => setIsOpen(false)}>{t("login")}</Link></li>
            <LanguageSwitcher/>
          </ul>
        </div>
      )}
    </nav>
  );
}