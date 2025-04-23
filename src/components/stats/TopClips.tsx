"use client";

import { useState, useRef } from "react";
import { chzzkClips } from "@/data/statsData";
import { motion, AnimatePresence } from "framer-motion";

export default function TopClips() {
  const [activeClip, setActiveClip] = useState<string | null>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (clip: string) => {
    hoverTimer.current = setTimeout(() => {
      setActiveClip(clip);
    }, 1000); 
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  return (
    <div>
      <motion.h2
        className="text-3xl font-extrabold mt-12 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎥 인기 클립 Top 12
      </motion.h2>
      <p className="mb-6 mt-3 text-lg text-gray-600 dark:text-gray-300 text-center">
        1년 동안 가장 인기가 많았던 클립을 감상해보세요!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chzzkClips.map((clip, index) => (
          <motion.div
            key={index}
            className="w-full max-w-lg bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => handleMouseEnter(clip)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-sm md:text-lg font-semibold text-center text-gray-800 dark:text-white mb-2">
              🔥 {index + 1}위 인기 클립
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://chzzk.naver.com/embed/clip/${clip}`}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title={`Chzzk Clip ${index + 1}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎬 오버레이 팝업 */}
      <AnimatePresence>
        {activeClip && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveClip(null)} // 바깥 클릭 시 닫기
          >
            <motion.div
              className="relative w-[90vw] max-w-6xl aspect-video"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // 내부 클릭은 무시
            >
              <iframe
                src={`https://chzzk.naver.com/embed/clip/${activeClip}?autoplay=1&mute=1`}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
