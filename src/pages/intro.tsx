"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* 🌠 별똥별 애니메이션 */}
      {windowWidth !== null && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => {
            const startX = Math.random() * windowWidth;
            const endX = startX + Math.random() * 100 - 50;
            const isBigStar = Math.random() > 0.8; // 20% 확률로 큰 별 생성
            const starSize = isBigStar
              ? Math.random() * 6 + 10
              : Math.random() * 3 + 5; // 큰 별 6~12px, 작은 별 2~5px

            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full shadow-lg"
                style={{
                  width: `${starSize}px`,
                  height: `${starSize}px`,
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
                  duration: Math.random() * 5 + 4, // 4~9초
                  repeat: Infinity,
                  delay: Math.random() * 3,
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
        🎉 유즈하 리코와 함께한 1년 🎉
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-4 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        함께 걸어온 시간들, 그리고 앞으로의 이야기.
      </motion.p>

      {/* ⌨️ 타이핑 애니메이션 */}
      <div className="mt-6 text-center text-xl md:text-3xl font-semibold">
        <TypeAnimation
          sequence={[
            "🎶 리코의 목소리와 함께한 감동의 순간",
            2000,
            "💙 팬들과 쌓아온 소중한 추억들",
            2000,
            "🌠 새로운 도전과 멈추지 않는 성장",
            2000,
            "🎤 밤을 가득 채운 리코의 노래 방송",
            2000,
            "📅 매일매일 기다려진 스트리밍 시간",
            2000,
            "💬 팬들과 실시간으로 나눈 소중한 대화",
            2000,
            "✨ 함께 웃고, 함께 울었던 우리들의 이야기",
            2000,
            "🎁 그리고, 또 다른 1년을 향해!",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* 🔹 메인 페이지로 이동 버튼 */}
      <motion.button
        className="mt-10 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => router.push("/")}
      >
        ✨ 메인 페이지로 가기
      </motion.button>
    </div>
  );
}
