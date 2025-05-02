import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
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

  return (
    <div className="min-h-[90vh] md:min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-all">
      <Header
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      <main
        className="flex-1 p-6 container mx-auto transition-all"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
