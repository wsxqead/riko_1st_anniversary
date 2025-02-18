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
import { motion } from "framer-motion";
import {
  chartData,
  chzzkClips,
  COLORS,
  songData,
  stats,
} from "@/data/statsData";

export default function RikoStats() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-16 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📊 리코의 1년간 기록된 데이터
      </motion.h1>
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
