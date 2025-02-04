import { useState } from "react";
import Image from "next/image";

const coversData = [
  {
    title: "용사",
    date: "2024. 05. 17.",
    image: "/images/cover/cover1.jpg",
    videoUrl: "https://www.youtube.com/embed/lfxl4YlY0lE",
  },
  {
    title: "괴수의 꽃노래",
    date: "2024. 07. 21.",
    image: "/images/cover/cover2.jpg",
    videoUrl: "https://www.youtube.com/embed/CtXv2_NBBOU",
  },
  {
    title: "지구를 줄게",
    date: "2024. 08. 23.",
    image: "/images/cover/cover3.jpg",
    videoUrl: "https://www.youtube.com/embed/T10fmu7T4eA",
  },
  {
    title: "맑은 날",
    date: "2024. 09. 23.",
    image: "/images/cover/cover4.jpg",
    videoUrl: "https://www.youtube.com/embed/Rr2GjXAgJ9E",
  },
  {
    title: "GETCHA! (w. 아오쿠모 린)",
    date: "2024. 10. 04.",
    image: "/images/cover/cover5.jpg",
    videoUrl: "https://www.youtube.com/embed/7CQuc6Jf4UE",
  },
  {
    title: "톤데모 원더즈",
    date: "2024. 10. 18.",
    image: "/images/cover/cover6.jpg",
    videoUrl: "https://www.youtube.com/embed/dglNAGJiDT8",
  },
  {
    title: "케세라세라",
    date: "2024. 11. 01.",
    image: "/images/cover/cover7.jpg",
    videoUrl: "https://www.youtube.com/embed/J49wnPBsyrU",
  },
  {
    title: "경화수월",
    date: "2024. 11. 21.",
    image: "/images/cover/cover8.jpg",
    videoUrl: "https://www.youtube.com/embed/c6G7vRuJyhs",
  },
  {
    title: "주름맞추기",
    date: "2024. 12. 13.",
    image: "/images/cover/cover9.jpg",
    videoUrl: "https://www.youtube.com/embed/cGjgCLuyAro",
  },
  {
    title: "크리스마스송",
    date: "2024. 12. 25.",
    image: "/images/cover/cover10.jpg",
    videoUrl: "https://www.youtube.com/embed/gXJMNur50m8",
  },
  {
    title: "꽃의 탑",
    date: "2025. 01. 10.",
    image: "/images/cover/cover11.jpg",
    videoUrl: "https://www.youtube.com/embed/EtkolJZEmpg",
  },
  {
    title: "절대 적대 완전 싫어",
    date: "2025. 01. 28.",
    image: "/images/cover/cover12.jpg",
    videoUrl: "https://www.youtube.com/embed/PBh8a0GaNFs",
  },
];

export default function CoversArchive() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-[#a6d0a6] drop-shadow-lg text-center">
        🎤 리코의 커버곡 아카이브
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
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
