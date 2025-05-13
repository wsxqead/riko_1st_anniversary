"use client";

import { useEffect, useState } from "react";
import cloud from "d3-cloud";
import { gameData } from "@/data/gameData";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface CloudWord {
  text: string;
  size: number;
  x: number;
  y: number;
  rotate: number;
}

function getColorFromText(text: string) {
  const hash = text
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  return `hsl(${hue}, 60%, 70%)`;
}

export default function GameWordCloud() {
  const { t } = useTranslation("common");
  const [words, setWords] = useState<CloudWord[]>([]);
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  console.log("gameData", gameData.length);

  useEffect(() => {
    const layout = cloud()
      .size([800, 800])
      .words(
        gameData.map((d) => ({
          text: d.name,
          size: Math.random() * 14 + 14,
        }))
      )
      .padding(2)
      .rotate(() => (Math.random() > 0.6 ? 90 : 0))
      .spiral("rectangular")
      .font("Impact")
      .fontSize((d) => d.size!)
      .on("end", (computedWords: CloudWord[]) => {
        setWords(computedWords);
      });

    layout.start();
  }, []);

  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-extrabold mt-12 text-[#A6D0A6] drop-shadow-lg text-center">
        {t("stats.gameWordCloudTitle")}
      </h2>

      <p className="mb-4 mt-3 text-lg text-gray-600 dark:text-gray-300 text-center">
        {t("stats.gameWordCloudDescription")}
      </p>

      <p
        className="text-center text-2xl md:text-3xl font-bold text-[#A6D0A6] mb-6 transition-all duration-200"
        style={{ minHeight: "2.5rem" }}
      >
        {hoveredWord ? hoveredWord : t("stats.gameWordCloudHover")}
      </p>

      <svg
        width="100%"
        height="auto"
        viewBox="-400 -400 800 800"
        preserveAspectRatio="xMidYMid meet"
        className="max-w-[90%] md:max-w-[800px]"
      >
        {words.map((word, index) => (
          <motion.text
            key={index}
            x={word.x}
            y={word.y}
            fontSize={Math.min(word.size, 28)}
            textAnchor="middle"
            transform={`rotate(${word.rotate}, ${word.x}, ${word.y})`}
            style={{
              fontFamily: "Impact",
              fill: getColorFromText(word.text),
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setHoveredWord(word.text)}
            onMouseLeave={() => setHoveredWord(null)}
          >
            {word.text}
          </motion.text>
        ))}
      </svg>
    </motion.div>
  );
}
