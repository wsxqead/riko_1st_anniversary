"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function IntroPage() {
  const [isAnniversary, setIsAnniversary] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Seoul",
      });
      const currentTime = new Date(now);
      const anniversaryDate = new Date("2025-05-19T00:00:00+09:00");

      setIsAnniversary(currentTime >= anniversaryDate);
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* 🌠 별똥별 애니메이션 */}
      {windowWidth !== null && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => {
            const startX = Math.random() * windowWidth;
            const endX = startX + Math.random() * 100 - 50;
            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full shadow-lg"
                style={{
                  width: `${Math.random() * 3 + 2}px`,
                  height: `${Math.random() * 3 + 2}px`,
                  top: `-${Math.random() * 100}px`,
                  left: `${startX}px`,
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                }}
                initial={{ opacity: 1 }}
                animate={{
                  x: [0, endX - startX],
                  y: [0, window.innerHeight + 100],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 5 + 4, // 🔥 더 느리게 (4~9초)
                  repeat: Infinity,
                  delay: Math.random() * 3, // 랜덤한 지연 효과
                }}
              />
            );
          })}
        </div>
      )}

      {/* 🎇 인트로 메시지 */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center text-blue-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎉 유즈하 리코 1주년 🎉
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-4 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        함께한 1년, 소중한 순간들을 되돌아보세요.
      </motion.p>

      {/* ⌨️ 타이핑 애니메이션 */}
      <div className="mt-6 text-center text-xl md:text-3xl font-semibold">
        <TypeAnimation
          sequence={[
            "🎵 리코의 목소리로 노래했던 순간",
            2000,
            "💙 팬들과 함께한 소중한 시간",
            2000,
            "🌠 새로운 도전과 성장의 발자취",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* 📌 메뉴 (사전 공개 & 1주년 당일 공개 분리) */}
      <div className="mt-10 w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* 🎁 사전 공개 메뉴 */}
        <motion.div
          className="p-4 bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl font-bold text-blue-300">🎨 팬아트 갤러리</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl font-bold text-blue-300">💌 팬 메시지</p>
        </motion.div>

        {/* 🎉 1주년 당일 공개 */}
        {isAnniversary ? (
          <>
            <motion.div
              className="p-4 bg-blue-500 rounded-lg shadow-md text-white"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold">📖 월간 리코</p>
            </motion.div>

            <motion.div
              className="p-4 bg-blue-500 rounded-lg shadow-md text-white"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold">🎤 라이브 방송 다시보기</p>
            </motion.div>

            <motion.div
              className="p-4 bg-blue-500 rounded-lg shadow-md text-white"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold">🏆 1년의 기록</p>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-md opacity-50"
              whileHover={{ scale: 1 }}
            >
              <p className="text-xl font-bold text-gray-400">🔒 월간 리코</p>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-md opacity-50"
              whileHover={{ scale: 1 }}
            >
              <p className="text-xl font-bold text-gray-400">
                🔒 라이브 방송 다시보기
              </p>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-md opacity-50"
              whileHover={{ scale: 1 }}
            >
              <p className="text-xl font-bold text-gray-400">🔒 1년의 기록</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
