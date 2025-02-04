import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </h1>
      <p className="text-lg mb-8 text-center text-gray-300">
        리코의 1년을 돌아보며, 팬들과 함께 즐기는 공간! 다양한 이벤트와 팬
        콘텐츠를 확인해보세요.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/timeline-history">
          <a className="bg-blue-500 hover:bg-blue-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            📅 리코의 성장 타임라인
          </a>
        </Link>
        <Link href="/monthly-highlights">
          <a className="bg-purple-500 hover:bg-purple-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            🗓️ 월간 리코
          </a>
        </Link>
        <Link href="/fan-card-generator">
          <a className="bg-green-500 hover:bg-green-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            💳 팬 회원증 만들기
          </a>
        </Link>
        <Link href="/fan-card-gallery">
          <a className="bg-red-500 hover:bg-red-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            📸 팬 회원증 갤러리
          </a>
        </Link>
        <Link href="/riko-stats">
          <a className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-lg text-center text-black text-lg shadow-md">
            📊 리코의 1년간 데이터
          </a>
        </Link>
        {/* <Link href="/music-playlist">
          <a className="bg-indigo-500 hover:bg-indigo-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            🎵 라이브 음악 플레이리스트
          </a>
        </Link> */}
        <Link href="/riko-quotes">
          <a className="bg-gray-500 hover:bg-gray-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            🗨️ 리코의 명언
          </a>
        </Link>
        <Link href="/special-event">
          <a className="bg-pink-500 hover:bg-pink-600 p-4 rounded-lg text-center text-white text-lg shadow-md">
            🎟️ 1주년 기념 이벤트
          </a>
        </Link>
      </div>

      <footer className="mt-12 text-gray-400">
        © 2025 유즈하 리코 1주년 기념 사이트
      </footer>
    </div>
  );
}
