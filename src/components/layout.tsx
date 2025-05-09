import Header from "./Header";
import Footer from "./Footer";
import FixedUtilityBar from "./FixedUtilityBar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const observer = new ResizeObserver(() => {
      setHeaderHeight(header.offsetHeight);
    });

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark";
      setTheme(storedTheme || "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="min-h-[90vh] md:min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-all">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main
        className="flex-1 p-6 container mx-auto transition-all"
        style={{ paddingTop: `${headerHeight + 120}px` }}
      >
        {children}
      </main>

      <Footer />

      {/* 👉 유틸바는 인트로 등 특정 경로에서는 안 보이게 */}
      {!["/", "/intro"].includes(pathname ?? "") && (
        <FixedUtilityBar theme={theme} toggleTheme={toggleTheme} />
      )}
    </div>
  );
}
