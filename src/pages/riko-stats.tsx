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
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import {
  chartData,
  chzzkClips,
  COLORS,
  songData,
  stats,
} from "@/data/statsData";
import { useEffect, useState } from "react";
import { gameData } from "@/data/gameData";
import cloud from "d3-cloud";

interface CloudWord {
  text: string;
  size: number;
  x: number;
  y: number;
  rotate: number;
}

export default function RikoStats() {
  const [words, setWords] = useState<CloudWord[]>([]);
  // const [wordCount, setWordCount] = useState<number>(0);
  // const [selectedGame, setSelectedGame] = useState<string | null>(null);

  useEffect(() => {
    const layout = cloud()
      .size([800, 800])
      .words(
        gameData.map((d) => ({ text: d.name, size: Math.random() * 28 + 12 }))
      )
      .padding(2)
      .rotate(() => (Math.random() > 0.6 ? 90 : 0))
      .font("Impact")
      .fontSize((d) => d.size!)
      .on("end", (computedWords: CloudWord[]) => {
        setWords(computedWords);
        // setWordCount(computedWords.length);
      });

    layout.start();
  }, []);

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
          {/* 📅 월별 방송 횟수 & 방송 시간 차트 개선 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#A6D0A6]">
              📅 월별 방송 횟수 & 방송 시간
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <defs>
                  {/* 그래디언트 효과 추가 */}
                  <linearGradient
                    id="colorBroadcast"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#A6D0A6" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#A6D0A6" stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8FBF8F" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#8FBF8F" stopOpacity={0.2} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
                <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                <YAxis tick={{ fill: "#fff" }} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.1)" }}
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                />
                <Bar dataKey="방송횟수" fill="url(#colorBroadcast)">
                  {/* 개별 숫자 라벨 표시 */}
                  <LabelList dataKey="방송횟수" position="top" fill="white" />
                </Bar>
                <Bar dataKey="방송시간" fill="url(#colorTime)">
                  <LabelList dataKey="방송시간" position="top" fill="white" />
                </Bar>
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

      <h2 className="text-3xl font-extrabold mt-12 text-[#A6D0A6] drop-shadow-lg text-center">
        🎮 리코가 플레이한 게임들
      </h2>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코가 방송에서 플레이한 게임들을 태그 구름으로 확인하세요! 🎮
      </p>
      {/* SVG 기반 워드 클라우드 */}
      <svg width="800" height="800" viewBox="-400 -400 800 800">
        {words.map((word, index) => (
          <text
            key={index}
            x={word.x}
            y={word.y}
            fontSize={word.size}
            textAnchor="middle"
            transform={`rotate(${word.rotate}, ${word.x}, ${word.y})`}
            style={{
              fontFamily: "Impact",
              fill: `hsl(${Math.random() * 360}, 60%, 70%)`,
              cursor: "pointer",
            }}
            // onClick={() => setSelectedGame(word.text)}
          >
            {word.text}
          </text>
        ))}
      </svg>

      {/* 📌 게임 썸네일 모달 */}
      {/* {selectedGame && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedGame(null)} // 배경 클릭 시 모달 닫기
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center relative"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
          >
            <h2 className="text-2xl font-bold text-[#A6D0A6]">
              {selectedGame}
            </h2>
            <Image
              src={`/images/game-thumbnails/${selectedGame}.png`}
              alt={selectedGame}
              className="w-64 h-64 mt-4 rounded-md"
              width={256}
              height={256}
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => setSelectedGame(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
