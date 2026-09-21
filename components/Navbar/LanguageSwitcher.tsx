"use client";
import { usePathname,useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function LanguageSwitcher(){
    const locale=useLocale()
    const pathname=usePathname()
    const router=useRouter()
    const nextlocale=locale==="ar"?"en":"ar";
    const togglelanguage=()=>{
        const newpath=pathname.replace(`/${locale}`, `/${nextlocale}`)
        router.replace(newpath)
    }
    return(
        <button onClick={togglelanguage} className=" flex justify-start">
            {nextlocale}
        </button>

    )
}