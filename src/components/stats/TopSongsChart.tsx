"use client";

import { COLORS, songData } from "@/data/statsData";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

export default function TopSongsChart() {
  const topSongs = songData.slice(0, 16);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-center text-[#A6D0A6] mb-6">
        🎤 가장 많이 불린 곡 Top 16
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        {/* 📋 정렬된 리스트 */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-gray-800 dark:text-white text-sm md:text-lg w-full md:w-auto">
          {topSongs.map((song, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 hover:text-[#A6D0A6] transition-colors duration-200"
            >
              <span className="text-xl font-bold text-[#A6D0A6]">
                {index + 1}.
              </span>
              <span>{song.name}</span>
              <span className="text-gray-400">({song.count}회)</span>
            </div>
          ))}
        </div>

        {/* 🎤 파이 차트 */}
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={topSongs}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#A6D0A6"
              label
            >
              {topSongs.map((_, index) => (
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
    </motion.div>
  );
}
