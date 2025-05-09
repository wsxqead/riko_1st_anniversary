// components/FixedUtilityBar.tsx
import { Moon, Sun, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function FixedUtilityBar({ theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname?.split("/")[1] || "ko";

  const handleLocaleChange = (lang: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    const nextPath = `/${lang}/${segments.slice(2).join("/")}`; // 0: "", 1: locale, 나머지 경로

    router.push(nextPath);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* 🌗 다크모드 */}
      <button
        onClick={toggleTheme}
        className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition"
        title="다크모드 전환"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* 🌐 언어 선택 */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition"
          title="언어 선택"
        >
          <Languages className="w-5 h-5" />
        </button>

        {open && (
          <div className="absolute right-12 bottom-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow p-2 space-y-1">
            {["ko", "ja", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLocaleChange(lang)}
                className={`block w-full text-left px-3 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600 whitespace-nowrap ${
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
