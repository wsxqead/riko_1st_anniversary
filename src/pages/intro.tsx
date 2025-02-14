"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function IntroPage() {
  const [isAnniversary, setIsAnniversary] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 한국 시간 기준으로 2025년 5월 19일 00:00부터 공개
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
    const currentTime = new Date(now);
    const anniversaryDate = new Date("2025-05-19T00:00:00+09:00");

    setIsAnniversary(currentTime >= anniversaryDate);
  }, []);

  useEffect(() => {
    setAudio(new Audio("/sounds/tts_intro.mp3")); // TTS 음성 파일
  }, []);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* ✨ 별똥별 애니메이션 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[100px] bg-white opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

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

      {/* 🔊 음성 안내 버튼 */}
      <button
        onClick={playAudio}
        className="mt-6 bg-blue-500 px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        🎙️ 안내 듣기
      </button>

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
