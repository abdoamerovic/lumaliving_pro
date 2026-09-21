"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-2 text-sm pb-6">
      <Link href="/" className="hover:underline">
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const name = segment.replace(/-/g, " ");

        return (
          <div key={segment} className="flex items-center gap-2">
            <span>/</span>

            <Link href={href} className="capitalize hover:underline">
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}