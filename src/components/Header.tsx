import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
        {/* 🔹 로고 */}
        <Link href="/" className="text-white text-xl font-bold">
          <Image
            src="/images/main_logo.png"
            alt="메인 로고"
            width={130}
            height={80}
          />
        </Link>

        {/* 🔹 햄버거 메뉴 버튼 (모바일용) */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* ☀️🌙 다크 모드 토글 버튼 */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
        >
          {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
        </button>

        {/* 🔹 메뉴 목록 */}
        {/* 메뉴 목록 */}
        <div
          className={`absolute md:static top-24 left-0 w-full md:flex md:gap-6 md:w-auto transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          } md:opacity-100 md:scale-y-100 md:visible bg-slate-50 dark:bg-gray-800`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-3 md:gap-6 text-center">
            {[
              { href: "/", label: "🏠 홈" },
              {
                label: "✨ 리코의 발자취",
                key: "history",
                children: [
                  { href: "/timeline-history", label: "📅 리코의 이야기" },
                  { href: "/monthly-highlights", label: "📚 월간 리코" },
                  { href: "/riko-stats", label: "📊 1년간의 기록" },
                ],
              },
              {
                label: "🎧 리코의 음악 공간",
                key: "music",
                children: [
                  { href: "/music-playlist", label: "💿 커버곡 컬렉션" },
                  { href: "/singing-history", label: "🎵 노래 아카이브" },
                ],
              },
              {
                label: "🎁 팬과 함께하는 1주년",
                key: "anniversary",
                children: [
                  { href: "/fan-card", label: "💳 팬 회원증" },
                  { href: "/knight-pledge", label: "🏰 기사 서약서" },
                  { href: "/goods-catalog", label: "🎀 1주년 가상 굿즈" },
                ],
              },
              {
                label: "💬 추억 & 이벤트",
                key: "memories",
                children: [
                  { href: "/riko-quotes", label: "🗨️ 리코의 명언" },
                  { href: "/messages", label: "💌 메세지북 페이지" },
                  { href: "/style-book", label: "👗 리코 스타일북" },
                  { href: "/stella", label: "📖 리코와 함께 빛나는 별들" },
                ],
              },
            ].map((item, idx) =>
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
