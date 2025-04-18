import { useState } from "react";
import Image from "next/image";
import { coversData } from "@/data/coversData";

export default function CoversArchive() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#a6d0a6] drop-shadow-lg text-center">
        🎤 리코의 커버곡 아카이브
      </h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 text-center">
        리코가 부른 커버곡들을 감상하세요! 💚
      </p>

      {/* 🔹 커버곡 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {coversData.map((cover, index) => (
          <div
            key={index}
            className="relative w-full bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedVideo(cover.videoUrl)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 커버 이미지 */}
            <div className="relative w-full h-52 overflow-hidden rounded-md shadow-md">
              <Image
                src={cover.image}
                alt={cover.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />

              {/* 🎨 SVG 오버레이 효과 */}
              <svg
                viewBox="0 0 300 200"
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <defs>
                  <pattern
                    id={`bg-image${index}`}
                    patternUnits="userSpaceOnUse"
                    width="300"
                    height="200"
                  >
                    <image
                      href={cover.image}
                      x="0"
                      y="0"
                      width="300"
                      height="200"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>
                <symbol id={`fade-text${index}`}>
                  <text
                    x="50%"
                    y="50%"
                    fill={`url(#bg-image${index})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="clamp(14px, 3vw, 40px)"
                    fontFamily="sans-serif"
                    stroke="#cecece"
                    strokeWidth="2px"
                    clipPath="inset(0% 0% 0% 0%)"
                  >
                    {cover.title}
                  </text>
                </symbol>
                <g>
                  <use className="stroke" xlinkHref={`#fade-text${index}`} />
                  <use className="image-bg" xlinkHref={`#fade-text${index}`} />
                </g>
              </svg>
            </div>

            {/* 타이틀 & 날짜 */}
            <h3 className="text-xl font-semibold mt-4 text-center truncate">
              {cover.title}
            </h3>
            <p className="text-gray-400 text-sm text-center">{cover.date}</p>
          </div>
        ))}
      </div>

      {/* 🔹 모달 (유튜브 영상) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-2xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-64 md:h-96 rounded-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
