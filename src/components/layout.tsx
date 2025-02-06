import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white relative">
      {/* 🌟 반짝이는 배경 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_5%,_transparent_50%)] opacity-20 pointer-events-none"></div>

      {/* 🔹 헤더 */}
      <header className="bg-gradient-to-r from-[#8FBF8F] to-[#A6D0A6] p-6 shadow-lg text-center text-gray-900 font-bold text-2xl md:text-3xl tracking-wider relative z-10 animate-pulse">
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </header>

      {/* 🔹 네비게이션 바 */}
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          {[
            { href: "/", label: "🏠 홈" },
            { href: "/timeline-history", label: "📅 타임라인" },
            { href: "/monthly-highlights", label: "🗓️ 월간 리코" },
            { href: "/goods-catalog", label: "🎁 리코 굿즈" },
            { href: "/covers-archive", label: "🎧 리코 커버곡" },
            { href: "/fan-card/generator", label: "💳 팬 회원증" },
            { href: "/riko-stats", label: "📊 리코의 데이터" },
            { href: "/singing-history", label: "🎵 음악" },
            { href: "/riko-quotes", label: "🗨️ 리코의 명언" },
            { href: "/special-event", label: "🎟️ 이벤트" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#A6D0A6] transition-transform transform hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 🔹 페이지 내용 */}
      <main className="flex-1 p-6 container mx-auto">{children}</main>

      {/* 🔹 푸터 */}
      <footer className="bg-gray-800 text-gray-400 p-6 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* 사이트 정보 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              🎉 유즈하 리코 1주년 기념 사이트
            </h3>
            <p className="mt-2 leading-relaxed">
              리코의 1년을 기념하는 팬 사이트입니다. 다양한 콘텐츠와 이벤트를
              통해 리코와 함께하세요! 💙
            </p>
          </div>

          {/* 주요 페이지 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">🔗 주요 페이지</h3>
            <ul className="mt-2 space-y-2">
              {[
                { href: "/fan-card/generator", label: "💳 팬 회원증 만들기" },
                { href: "/fan-card/gallery", label: "📸 팬 회원증 갤러리" },
                { href: "/riko-stats", label: "📊 리코의 1년간 데이터" },
                { href: "/music-playlist", label: "🎵 라이브 음악" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#A6D0A6] transition-transform transform hover:scale-110"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 소셜 링크 */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white">🌎 소셜 링크</h3>
            <div className="mt-2 flex justify-center md:justify-end gap-4">
              {[
                {
                  href: "https://twitter.com/YuzuhaRiko",
                  label: "🐦 X (트위터)",
                  color: "hover:text-blue-400",
                },
                {
                  href: "https://www.youtube.com/@yuzuhariko",
                  label: "📺 유튜브",
                  color: "hover:text-red-400",
                },
                {
                  href: "https://chzzk.naver.com/8fd39bb8de623317de90654718638b10",
                  label: "💬 치지직",
                  color: "hover:text-green-400",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-transform transform hover:scale-110 ${item.color}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4 text-xs">
          © 2025 유즈하 리코 1주년 기념 사이트 | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
