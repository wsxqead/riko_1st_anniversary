export default function RikoStats() {
  const stats = [
    { label: "총 방송 횟수", value: "250회" },
    { label: "총 방송 시간", value: "600시간" },
    { label: "총 채팅 메시지 수", value: "1,200,000개" },
    { label: "가장 많이 불린 곡", value: "KING" },
    { label: "가장 인기 있었던 방송", value: "마왕 토벌 최종전" },
    { label: "팬덤 성장률", value: "+350%" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📊 리코의 1년간 기록된 데이터</h1>
      <p className="mb-6 text-lg">리코의 활동을 숫자로 정리했습니다!</p>
      <div className="w-full max-w-2xl space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold">{stat.label}</p>
            <p className="text-2xl text-blue-400 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
