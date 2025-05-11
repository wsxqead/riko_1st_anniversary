"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const supportedLocales = ["ko", "ja", "en"];

/**
 * 현재 URL 경로에서 locale segment를 안정적으로 추출하는 훅
 */
export function useCurrentLocale(): string {
  const pathname = usePathname();
  const [locale, setLocale] = useState("ko");

  useEffect(() => {
    const segments = pathname?.split("/").filter(Boolean);
    const pathLocale = segments?.[0];
    if (!pathLocale) return;

    if (supportedLocales.includes(pathLocale)) {
      setLocale(pathLocale);
    } else {
      setLocale("ko");
    }
  }, [pathname]);

  return locale;
}
