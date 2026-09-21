import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "next-intl";


export function Footer() {
  const t=useTranslations("footer")
  
  const supportLinks = t.raw("support.links") as string[];
  const companyLinks = t.raw("company.links") as string[];
  return (
    <footer className="bg-[#2A2724] px-10 py-14 text-[#B8B2A7] ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h2 className="font-serif text-2xl text-white">{t("brand")}</h2>
            <p className="mt-3 text-sm">{t("tagline")}.</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white">
              {t("support.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white">
              {t("company.title")}
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white">
              {t("followUs")}
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5A5650] transition-colors hover:border-white hover:text-white"
              >
                <FaInstagram  size={16} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5A5650] transition-colors hover:border-white hover:text-white"
              >
                <FaPinterest  />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5A5650] transition-colors hover:border-white hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#454138] pt-6 text-center text-sm">
          {t("copyright")}.
        </div>
      </div>
    </footer>
  );
}



