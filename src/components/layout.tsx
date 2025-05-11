import Header from "./Header";
import Footer from "./Footer";
import FixedUtilityBar from "./FixedUtilityBar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 px-4 md:px-6 pt-[120px] transition-all">
        {children}
      </main>

      <Footer />

      {!["/intro"].includes(pathname ?? "") && (
        <FixedUtilityBar theme={theme} toggleTheme={toggleTheme} />
      )}
    </div>
  );
}
