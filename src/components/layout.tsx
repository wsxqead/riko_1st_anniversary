import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* 🔹 네비게이션 바 */}
      <nav className="bg-gray-800 p-4 flex justify-center space-x-6">
        <Link href="/" className="text-white hover:text-blue-400">
          🏠 홈
        </Link>
        <Link
          href="/timeline-history"
          className="text-white hover:text-blue-400"
        >
          📅 타임라인
        </Link>
        <Link
          href="/monthly-highlights"
          className="text-white hover:text-blue-400"
        >
          🗓️ 월간 리코
        </Link>
        <Link href="/covers-archive" className="text-white hover:text-blue-400">
          🗓️ 리코 굿즈
        </Link>
        <Link
          href="/fan-card/generator"
          className="text-white hover:text-blue-400"
        >
          💳 팬 회원증
        </Link>
        <Link
          href="/fan-card/gallery"
          className="text-white hover:text-blue-400"
        >
          📸 팬 회원증 갤러리
        </Link>
        <Link href="/riko-stats" className="text-white hover:text-blue-400">
          📊 리코의 데이터
        </Link>
        <Link href="/music-playlist" className="text-white hover:text-blue-400">
          🎵 음악
        </Link>
        <Link href="/riko-quotes" className="text-white hover:text-blue-400">
          🗨️ 명언
        </Link>
        <Link href="/special-event" className="text-white hover:text-blue-400">
          🎟️ 이벤트
        </Link>
      </nav>

      {/* 🔹 페이지 내용 */}
      <main className="flex-1 p-6">{children}</main>

      {/* 🔹 푸터 */}
      <footer className="bg-gray-800 p-4 text-center text-gray-400">
        © 2025 유즈하 리코 1주년 기념 사이트
      </footer>
    </div>
  );
}
