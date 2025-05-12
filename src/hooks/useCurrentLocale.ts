"use client";

import { useRouter } from "next/router";

export function useCurrentLocale() {
  const router = useRouter();
  console.log("router.locale", router.locale);
  return router.locale || "ko";
}

// export function useCurrentLocale(): string {
//   const pathname = usePathname();
//   const [locale, setLocale] = useState("ko");
//   console.log("locale", locale, pathname);
//   useEffect(() => {
//     if (!pathname) return;

//     const path = typeof window !== "undefined" ? window.location.pathname : "";
//     console.log("path", path);
//     const segments = path.split("/").filter(Boolean);
//     const lang = segments[0];

//     if (supportedLocales.includes(lang)) {
//       setLocale(lang);
//     } else {
//       setLocale("ko");
//     }
//   }, [pathname]);

//   return locale;
// }
