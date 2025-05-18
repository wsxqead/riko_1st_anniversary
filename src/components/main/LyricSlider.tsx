import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const lyrics = [
  "[Intro]\n수많은 별들이 모여 빛나듯\n너와의 추억이 여기 모였어",

  "[Verse 1]\n밤하늘 위에 피어난 이야기\n처음엔 낯선 조용한 불빛\n조심스레 다가온 네 목소리가\n어느새 우리 마음을 물들였어",

  "[Pre-Chorus]\n매일 같은 하늘 아래에서\n조금씩 이어진 마음들이\n하나의 그림이 되어서\n별처럼 반짝이고 있어",

  "[Chorus]\n우리라는 별자리, 서로를 밝혀\n네가 있기에 나는 더 빛나\n끝없는 하늘 위, 수많은 이야기\n너와 함께 이 밤이 아름다워",

  "[Verse 2]\n너의 따뜻한 한마디가\n가끔씩 어두운 날을 비춰줘\n조용히 웃어주는 너의 모습에\n나도 다시 노래하게 돼",

  "[Bridge]\n수많은 별 사이 반짝인\n우리만의 소중한 순간들\n앞으로도 영원히 함께할 거야\n지금 이 마음을 기억할게",

  "[Chorus 2]\n우리라는 별자리, 함께 웃으며\n서로의 이름을 부르던 순간\n언제나 곁에서 환하게 빛나줘\n너와 나의 별이 사라지지 않게",

  "[Outro]\n우리라는 별자리, 빛나고 있어\n언제까지나 우린 함께일 거야\n영원히 반짝일 너와 나의 이야기",
];

export default function LyricSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lyrics.length);
    }, 2000); // 6초마다 전환
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 text-center min-h-[140px] px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-xl whitespace-pre-line text-gray-800 dark:text-gray-100 font-medium"
        >
          {lyrics[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
