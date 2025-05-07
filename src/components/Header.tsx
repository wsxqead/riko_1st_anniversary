import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/main/menuData";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (isMobile) {
      setDropdownOpen(dropdownOpen === menu ? null : menu);
    }
  };

  return (
    <nav
      id="site-header"
      className="p-4 fixed top-0 w-full z-50 shadow-md backdrop-blur-md bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          <Image
            src="/images/main_logo.png"
            alt="메인 로고"
            width={130}
            height={80}
          />
        </Link>

        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
        >
          {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
        </button>

        <div
          className={`absolute md:static top-24 left-0 w-full md:flex md:gap-6 md:w-auto transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          } md:opacity-100 md:scale-y-100 md:visible bg-slate-50 dark:bg-gray-800`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-3 md:gap-6 text-center">
            {menuData.map((item, idx) =>
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
              ) : (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
