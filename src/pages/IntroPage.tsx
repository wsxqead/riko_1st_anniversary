"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      initStars(); // 별 생성
      startMeteorShower(); // 별똥별 애니메이션 시작
    }
  }, []);

  // 🌠 별 랜덤 배치 및 회전 이동 효과 추가
  const initStars = () => {
    const starContainer = document.querySelector(".constellation");
    if (!starContainer) return;

    let stars = "";
    const numStars = 150; // 별 개수

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3 + 1; // 별 크기
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const delay = Math.random() * 5;

      stars += `<span class="star" style="
        width: ${size}px; 
        height: ${size}px; 
        left: ${x}px; 
        top: ${y}px;
        animation-delay: ${delay}s;">
      </span>`;
    }

    starContainer.innerHTML = stars;
  };

  // 🌠 별똥별 애니메이션
  const startMeteorShower = () => {
    setInterval(() => {
      const meteorContainer = document.querySelector(".meteorShower");
      if (!meteorContainer) return;

      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 2 + 1;

      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${startX}px`;
      meteor.style.animationDuration = `${duration}s`;

      meteorContainer.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, duration * 1000);
    }, Math.random() * 3000 + 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* 🌌 밤하늘 배경 */}
      <div className="nightSky">
        <div className="constellation"></div> {/* 별 */}
        <div className="meteorShower"></div> {/* 별똥별 */}
      </div>

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
