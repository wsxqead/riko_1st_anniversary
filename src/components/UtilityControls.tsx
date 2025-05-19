import { useCurrentLocale } from "@/hooks/useCurrentLocale";
import { Moon, Sun, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
  showLabel?: boolean; 
}

export default function UtilityControls({
  theme,
  toggleTheme,
  showLabel = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const currentLocale = useCurrentLocale();
  const pathname = usePathname();

  const handleLocaleChange = (lang: string) => {
    if (typeof window === "undefined") return;

    const supportedLocales = ["ko", "ja", "en"];

    if (!pathname) return;

    const segments = pathname.split("/").filter(Boolean);
    const restSegments = supportedLocales.includes(segments[0])
      ? segments.slice(1)
      : segments;

    const newPath = `/${lang}/${restSegments.join("/")}`;

    window.location.assign(newPath);
  };

  return (
    <div className="flex items-center gap-2 relative">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-1 px-3 py-1 rounded bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-500"
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
        {showLabel && (
          <span>{theme === "light" ? "다크 모드" : "라이트 모드"}</span>
        )}
      </button>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-1 rounded bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-500"
        >
          <Languages className="w-4 h-4" />
          {showLabel && (
            <span>
              {currentLocale === "ko" && "한국어"}
              {currentLocale === "ja" && "日本語"}
              {currentLocale === "en" && "English"}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute bottom-full right-0 mb-2 w-max bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow p-2 space-y-1 z-50">
            {["ko", "ja", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLocaleChange(lang)}
                className={`block px-3 py-1 text-sm rounded text-left whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  lang === currentLocale ? "font-bold text-blue-500" : ""
                }`}
              >
                {lang === "ko" && "🇰🇷 한국어"}
                {lang === "ja" && "🇯🇵 日本語"}
                {lang === "en" && "🇺🇸 English"}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
