export const menuData = [
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
      { href: "/original-songs", label: "🎙️ 리코의 자작곡 모음" },
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
      { href: "/style-book", label: "👗 리코 스타일북" },
      { href: "/riko-recipes", label: "🍳 리코의 요리노트" },
    ],
  },
];
