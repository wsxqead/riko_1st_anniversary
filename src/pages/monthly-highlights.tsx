export default function MonthlyHighlights() {
  const monthlyData = [
    { month: "2024년 5월", highlight: "🎉 리코 첫 방송 시작!" },
    { month: "2024년 6월", highlight: "🎤 첫 커버곡 발표" },
    { month: "2024년 7월", highlight: "🎮 인기 게임 스트리밍 도전" },
    { month: "2024년 8월", highlight: "🔥 대형 스트리머 콜라보 참여" },
    { month: "2024년 9월", highlight: "📈 구독자 수 급성장!" },
    { month: "2024년 10월", highlight: "🎃 핼러윈 특별 방송" },
    { month: "2024년 11월", highlight: "🎶 리코의 두 번째 커버곡 발표" },
    { month: "2024년 12월", highlight: "🎄 크리스마스 이벤트 방송" },
    { month: "2025년 1월", highlight: "🏆 올해의 최고 방송 투표" },
    { month: "2025년 2월", highlight: "💖 팬들과의 소통 방송" },
    { month: "2025년 3월", highlight: "🎤 1주년 기념 방송 예고" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🗓️ 월간 리코</h1>
      <p className="mb-6 text-lg">
        매월 리코의 주요 방송 하이라이트를 정리했습니다!
      </p>
      <div className="w-full max-w-2xl space-y-4">
        {monthlyData.map((item, index) => (
          <div key={index} className="border-l-4 border-purple-500 pl-4">
            <p className="text-lg font-semibold">{item.month}</p>
            <p className="text-gray-300">{item.highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
