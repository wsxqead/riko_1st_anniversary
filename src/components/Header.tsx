import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMenuData } from "@/data/main/menuData";
import UtilityControls from "./UtilityControls";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const menuItems = useMenuData();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (key: string) => {
    if (isMobile) {
      setDropdownOpen(dropdownOpen === key ? null : key);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md transition-all p-4">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          <Image
            src="/images/main_logo.png"
            alt="메인 로고"
            width={130}
            height={80}
          />
        </Link>

        {/* 🔹 Menu toggle for mobile */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* 🔹 Main Menu + 유틸 버튼 */}
        <div
          className={`absolute md:static top-[100%] left-0 w-full md:flex md:gap-6 md:items-center md:w-auto transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          } md:opacity-100 md:scale-y-100 md:visible bg-slate-50 dark:bg-gray-800`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-3 md:gap-6 text-center md:mr-4">
            {menuItems.map((item, idx) =>
              item.children ? (
                <li
                  key={idx}
                  onMouseEnter={() => !isMobile && setDropdownOpen(item.key!)}
                  onMouseLeave={() => !isMobile && setDropdownOpen(null)}
                >
                  <button
                    onClick={() => toggleDropdown(item.key!)}
                    className="block px-6 py-3 hover:text-blue-500 dark:hover:text-blue-300 w-full md:w-auto"
                  >
                    {item.label}
                  </button>
                  {dropdownOpen === item.key && (
                    <ul className="px-3 py-3 bg-white dark:bg-gray-700 md:absolute md:w-max rounded-md text-center shadow-md">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : null
            )}
          </ul>

          <div className="flex md:hidden justify-center items-center gap-2 px-4 py-2 border-t border-gray-300 dark:border-gray-700">
            <UtilityControls
              theme={theme}
              toggleTheme={toggleTheme}
              showLabel
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
