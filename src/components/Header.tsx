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

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 창 크기 변경 감지

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
        <div
          className={`absolute md:static top-24 left-0 w-full bg-slate-50 dark:bg-gray-800 md:flex md:gap-6 md:w-auto transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          } md:opacity-100 md:scale-y-100 md:visible`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-3 md:gap-6 text-center">
            <li>
              <Link
                href="/"
                className="block px-6 py-3 text-gray-900 dark:text-white hover:text-blue-400"
              >
                🏠 홈
              </Link>
            </li>

            {/* 🎇 리코의 발자취 */}
            <li
              onMouseEnter={() => !isMobile && setDropdownOpen("history")}
              onMouseLeave={() => !isMobile && setDropdownOpen(null)}
            >
              <button
                className="block px-6 py-3 text-gray-900 dark:text-white hover:text-blue-400 w-full md:w-auto"
                onClick={() => toggleDropdown("history")}
              >
                ✨ 리코의 발자취
              </button>
              {dropdownOpen === "history" && (
                <ul className="px-3 py-3 bg-gray-700 md:absolute md:w-48 rounded-md md:text-left text-center md:justify-start justify-center">
                  <li>
                    <Link
                      href="/timeline-history"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      📅 리코의 이야기
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/monthly-highlights"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      📚 월간 리코
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/riko-stats"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      📊 1년간의 기록
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* 리코의 음악 공간 */}
            <li
              onMouseEnter={() => !isMobile && setDropdownOpen("music")}
              onMouseLeave={() => !isMobile && setDropdownOpen(null)}
            >
              <button
                className="block px-6 py-3 text-gray-900 dark:text-white hover:text-blue-400 w-full md:w-auto"
                onClick={() => toggleDropdown("music")}
              >
                🎧 리코의 음악 공간
              </button>
              {dropdownOpen === "music" && (
                <ul className="px-3 py-3 bg-gray-700 md:absolute md:w-48 rounded-md md:text-left text-center md:justify-start justify-center">
                  <li>
                    <Link
                      href="/music-playlist"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      💿 커버곡 컬렉션
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/singing-history"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      🎵 노래 아카이브
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* 🎁 팬과 함께하는 1주년 */}
            <li
              onMouseEnter={() => !isMobile && setDropdownOpen("anniversary")}
              onMouseLeave={() => !isMobile && setDropdownOpen(null)}
            >
              <button
                className="block px-6 py-3 text-gray-900 dark:text-white hover:text-blue-400 w-full md:w-auto"
                onClick={() => toggleDropdown("anniversary")}
              >
                🎁 팬과 함께하는 1주년
              </button>
              {dropdownOpen === "anniversary" && (
                <ul className="px-3 py-3 bg-gray-700 md:absolute md:w-50 rounded-md md:text-left text-center md:justify-start justify-center">
                  <li>
                    <Link
                      href="/fan-card"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      💳 팬 회원증
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/goods-catalog"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      🎀 1주년 가상 굿즈
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* 💬 추억 & 이벤트 */}
            <li
              onMouseEnter={() => !isMobile && setDropdownOpen("memories")}
              onMouseLeave={() => !isMobile && setDropdownOpen(null)}
            >
              <button
                className="block px-6 py-3 text-gray-900 dark:text-white hover:text-blue-400 w-full md:w-auto"
                onClick={() => toggleDropdown("memories")}
              >
                💬 추억 & 이벤트
              </button>
              {dropdownOpen === "memories" && (
                <ul className="px-3 py-3 bg-gray-700 md:absolute md:w-64 rounded-md md:text-left text-center md:justify-start justify-center">
                  <li>
                    <Link
                      href="/riko-quotes"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      🗨️ 리코의 명언
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/special-event"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      💌 리코에게 보내는 한마디
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
