import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import {Footer} from "@/components/footer/page";
import { NextIntlClientProvider } from "next-intl";
import { Lora, Outfit } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

// <html className={`${lora.variable} ${outfit.variable}`}> ... <body className="font-sans">

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furnature",
  description: "Furnature E-commerce",
};

export default async function RootLayout({
  children,
  params,
}:{ 
  children:React.ReactNode;
  params:Promise<{locale:string}>;
}){
  const{locale}=await params;
 return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${outfit.variable}`}
      >
        <NextIntlClientProvider>
        <Navbar />
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}