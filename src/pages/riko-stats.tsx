import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function RikoStats() {
  const stats = [
    { label: "총 방송 횟수", value: "250회" },
    { label: "총 방송 시간", value: "1,487 시간" },
    { label: "총 커버곡 개수", value: "12곡" },
    { label: "가장 많이 플레이한 게임", value: "Minecraft" },
    { label: "가장 많이 불린 곡", value: "어른" },
    { label: "가장 많이 한 방송 유형", value: "게임 방송" },
  ];

  const chzzkClips = [
    "U08GUcAdMa",
    "6FtpG7zFSQ",
    "UXJvFiz4Jg",
    "klOJlOhNEC",
    "uPwZTGmxZl",
    "VgSb46jXQE",
    "tU7shKHXZd",
    "XyI0YiWtJd",
    "BDVwZ4Q0Pj",
    "AK1F0UBpDz",
  ];

  const chartData = [
    { name: "2024년 5월", 방송횟수: 13, 방송시간: 39 },
    { name: "2024년 6월", 방송횟수: 15, 방송시간: 25 },
    { name: "2024년 7월", 방송횟수: 12, 방송시간: 22 },
    { name: "2024년 8월", 방송횟수: 18, 방송시간: 30 },
    { name: "2024년 9월", 방송횟수: 20, 방송시간: 35 },
    { name: "2024년 10월", 방송횟수: 25, 방송시간: 40 },
    { name: "2024년 11월", 방송횟수: 22, 방송시간: 38 },
    { name: "2024년 12월", 방송횟수: 28, 방송시간: 42 },
    { name: "2025년 1월", 방송횟수: 30, 방송시간: 45 },
    { name: "2025년 2월", 방송횟수: 27, 방송시간: 40 },
    { name: "2025년 3월", 방송횟수: 23, 방송시간: 36 },
    { name: "2025년 4월", 방송횟수: 19, 방송시간: 32 },
    { name: "2025년 5월", 방송횟수: 19, 방송시간: 32 },
  ];

  // 🎤 가장 많이 불린 곡 TOP 10
  const songData = [
    { name: "어른", artist: "손디아", count: 15 },
    { name: "밤하늘에", artist: "담소네공방", count: 12 },
    { name: "케세라세라", artist: "미세스 그린애플", count: 10 },
    { name: "숲", artist: "최유리", count: 9 },
    { name: "주름맞추기", artist: "바운디", count: 9 },
    { name: "만찬가", artist: "츠키", count: 9 },
    { name: "입춘", artist: "한로로", count: 8 },
    { name: "있잖아", artist: "위수", count: 8 },
    { name: "클로즈 투 유", artist: "카펜터스", count: 8 },
    { name: "누군가의 빛나던", artist: "위수", count: 7 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-[#A6D0A6] drop-shadow-lg text-center">
        📊 리코의 1년간 기록된 데이터
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 활동을 숫자로 정리했습니다!
      </p>

      {/* 📌 반응형 좌우 배치 */}
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-6xl gap-8">
        {/* 📊 좌측: 방송 횟수 & 많이 불린 곡 */}
        <div className="flex flex-col space-y-8 flex-1">
          {/* 📅 월별 방송 횟수 차트 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#A6D0A6]">
              📅 월별 방송 횟수 & 방송 시간
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="방송횟수" fill="#A6D0A6" />
                <Bar dataKey="방송시간" fill="#8FBF8F" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 🎤 가장 많이 불린 곡 Top 10 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#A6D0A6]">
              🎤 가장 많이 불린 곡 Top 10
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
              <ul className="text-white text-sm md:text-lg space-y-3">
                {songData.map((song, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-[#A6D0A6]">
                      {index + 1}.
                    </span>
                    <span>{song.name}</span>
                    <span className="text-gray-400">({song.count}회)</span>
                  </li>
                ))}
              </ul>

              {/* 🎤 파이 차트 */}
              <ResponsiveContainer width={250} height={250}>
                <PieChart>
                  <Pie
                    data={songData}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#A6D0A6"
                    label
                  >
                    {songData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 📊 우측: 카드 리스트 */}
        <div className="flex-1 space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#A6D0A6] to-[#8FBF8F] p-4 rounded-lg shadow-lg text-center"
            >
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                {stat.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎥 인기 클립 Top 10 */}
      <h2 className="text-3xl font-extrabold mt-12 text-[#A6D0A6] drop-shadow-lg text-center">
        🎥 인기 클립 Top 10
      </h2>
      <p className="mb-6 text-lg text-gray-300 text-center">
        1년 동안 가장 인기가 많았던 클립을 감상해보세요!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chzzkClips.map((clip, index) => (
          <div
            key={index}
            className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <p className="text-sm md:text-lg font-semibold text-center text-white mb-2">
              🔥 {index + 1}위 인기 클립
            </p>
            <iframe
              src={`https://chzzk.naver.com/embed/clip/${clip}`}
              className="w-full h-32 md:h-48 rounded-lg"
              allowFullScreen
              title={`Chzzk Clip ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
