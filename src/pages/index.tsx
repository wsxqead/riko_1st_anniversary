import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  // 🎇 1주년 카운트다운 계산
  useEffect(() => {
    const targetDate = new Date("2025-05-18T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("🎉 오늘이 1주년입니다! 🎉");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 남음`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 mx-auto px-4 md:px-6 py-16">
      {/* ✨ 반짝이는 텍스트 애니메이션 효과 */}
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#FFC300] drop-shadow-lg max-w-[95%] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </motion.h1>

      {/* 카운트다운 */}
      <motion.p
        className="text-lg md:text-xl text-center text-[#A6D0A6] mt-3 md:mt-4 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {timeLeft}
      </motion.p>

      {/* 🌌 배경 + 오로라 효과 */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden mt-6 rounded-lg shadow-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-black opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* 📸 메인 이미지 */}
        <div className="relative w-full max-w-6xl">
          <Image
            src="/images/main.png"
            alt="메인 이미지"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* 🎊 축하 버튼 */}
      <div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transform transition hover:shadow-2xl relative overflow-hidden"
        >
          <span>🎊 1주년 이벤트 참여하기</span>
        </motion.button>
      </div>

      {/* 🎤 팬들의 축하 메시지 프리뷰 */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6] mb-6">
          💌 팬들의 축하 메시지
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg text-gray-300">
              리코님 1주년 축하드립니다! 항상 응원할게요! 💙
            </p>
            <span className="text-sm text-gray-500">- 팬A</span>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-lg text-gray-300">
              벌써 1년이라니! 앞으로도 좋은 방송 기대할게요!
            </p>
            <span className="text-sm text-gray-500">- 팬B</span>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-lg text-gray-300">
              리코님 덕분에 행복한 순간들이 많았어요! 💖
            </p>
            <span className="text-sm text-gray-500">- 팬C</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
