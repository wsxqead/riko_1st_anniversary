import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 mt-8 transition-all bg-slate-50 dark:bg-gray-800 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* 사이트 정보 */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white footer-glow">
            🎉 유즈하 리코 1주년 기념 사이트
          </h3>
          <p className="mt-2">
            리코의 1년을 기념하는 팬 사이트입니다. 다양한 콘텐츠와 이벤트를 통해
            리코와 함께하세요! 💚
          </p>
        </div>

        {/* 네비게이션 링크 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            🔗 주요 페이지
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/fan-card" className="hover:text-blue-400">
                💳 팬 회원증 만들기
              </Link>
            </li>
            <li>
              <Link href="/fan-card/gallery" className="hover:text-blue-400">
                📸 팬 회원증 갤러리
              </Link>
            </li>
            <li>
              <Link href="/riko-stats" className="hover:text-blue-400">
                📊 리코의 1년간 데이터
              </Link>
            </li>
          </ul>
        </div>

        {/* 소셜 링크 */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            🌎 소셜 링크
          </h3>
          <div className="mt-2 flex justify-center md:justify-end gap-4">
            <a
              href="https://twitter.com/YuzuhaRiko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 social-link"
            >
              🐦 X (트위터)
            </a>
            <a
              href="https://www.youtube.com/@yuzuhariko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 social-link"
            >
              📺 유튜브
            </a>
            <a
              href="https://chzzk.naver.com/8fd39bb8de623317de90654718638b10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 social-link"
            >
              💬 치지직
            </a>
          </div>
        </div>
      </div>

      {/* 저작권 정보 */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-xs">
        © 2025 유즈하 리코 1주년 기념 사이트 | All Rights Reserved
      </div>
    </footer>
  );
}
