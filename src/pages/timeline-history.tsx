export default function TimelineHistory() {
  const timelineEvents = [
    { date: "2024-05-19", event: "🎉 리코 첫 방송 시작!" },
    { date: "2024-06-10", event: "🔥 첫 커버곡 발표" },
    { date: "2024-08-01", event: "🎮 대형 스트리머 서버 참여" },
    { date: "2024-12-25", event: "🎄 크리스마스 특별 방송" },
    { date: "2025-03-15", event: "🎤 1주년 기념 방송 예고" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📅 리코 1년 성장 타임라인</h1>
      <div className="w-full max-w-2xl">
        {timelineEvents.map((event, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 mb-4">
            <p className="text-lg font-semibold">{event.date}</p>
            <p className="text-gray-300">{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
