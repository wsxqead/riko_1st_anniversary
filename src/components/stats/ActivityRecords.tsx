"use client";

import { useState } from "react";
import { groupedStats } from "@/data/statsData";
import { motion } from "framer-motion";

export default function RikoActivityRecords() {
  const [revealedIndexes, setRevealedIndexes] = useState<number[]>([]);

  const handleReveal = (globalIndex: number, e: React.MouseEvent) => {
    if (!revealedIndexes.includes(globalIndex)) {
      setRevealedIndexes((prev) => [...prev, globalIndex]);

      const x = e.clientX;
      const y = e.clientY;

      const div = document.createElement("dotlottie-player");
      div.setAttribute("src", "/images/dotlottie.lottie");
      div.setAttribute("background", "transparent");
      div.setAttribute("speed", "1");
      div.setAttribute("loop", "false");
      div.setAttribute("autoplay", "true");
      div.style.cssText = `position: fixed; width: 400px; height: 400px; z-index: 99; transform: translate(-50%, -50%); top: ${y}px; left: ${x}px; pointer-events: none;`;

      document.body.appendChild(div);
      setTimeout(() => div.remove(), 2000);
    }
  };

  return (
    <div className="space-y-10">
      {Object.entries(groupedStats).map(([category, items], groupIndex) => (
        <div key={groupIndex}>
          <h3 className="text-xl md:text-2xl font-bold text-[#A6D0A6] mb-4">
            📁 {category} 기록
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((stat, index) => {
              const globalIndex = groupIndex * 100 + index;
              const isRevealed = revealedIndexes.includes(globalIndex);

              return (
                <motion.div
                  key={globalIndex}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center border-l-4 border-[#A6D0A6] cursor-pointer hover:shadow-xl transition-all"
                  initial={{ opacity: 0, scale: 0.3, y: 30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.03,
                      duration: 0.5,
                      type: "spring",
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleReveal(globalIndex, e)}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-[#4B8B4B] dark:text-[#A6D0A6] transition-all duration-300">
                    {isRevealed ? stat.value : "❓"}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
