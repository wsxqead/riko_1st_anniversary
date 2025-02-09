import { useState } from "react";
import Image from "next/image";
import { coversData } from "@/data/coversData";
import { shortsData } from "@/data/shortsData";
import { cloudSongs } from "@/data/cloudData";
import { motion } from "framer-motion";

const tabs = ["리코 정식 커버곡", "리코 쇼츠", "리코 클라우드"];

// 유튜브 썸네일 자동 추출 함수
const getYoutubeThumbnail = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/embed\/|.*\/v\/|shorts\/))([^&?]+)/
  );
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "/images/default_thumb.jpg";
};

export default function CoversArchive() {
  const [selectedTab, setSelectedTab] = useState<string>("리코 정식 커버곡");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getData = () => {
    switch (selectedTab) {
      case "리코 정식 커버곡":
        return coversData.map((item) => ({
          ...item,
          image: item.image, // 직접 등록한 썸네일 사용
        }));
      case "리코 쇼츠":
        return shortsData.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoUrl), // 유튜브 썸네일 자동 생성
        }));
      case "리코 클라우드":
        return cloudSongs.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoThumUrl), // 유튜브 썸네일 자동 생성
        }));
      default:
        return coversData;
    }
  };

  const handleClick = (videoUrl: string) => {
    if (selectedTab === "리코 쇼츠") {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
    } else {
      setSelectedVideo(videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16">
      {/* 🔹 헤더 */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-12 text-[#a6d0a6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎤 리코의 커버곡 & 아카이브
      </motion.h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 음악을 한 곳에서 만나보세요! 💚
      </p>

      {/* 🔹 탭 메뉴 */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold text-lg transition ${
              selectedTab === tab
                ? "bg-[#a6d0a6] text-gray-900 shadow-lg scale-105"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 선택된 탭 콘텐츠 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {getData().map((item, index) => (
          <div
            key={index}
            className="relative w-full bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleClick(item.videoUrl)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 커버 이미지 */}
            <div className="relative w-full h-52 overflow-hidden rounded-md shadow-md">
              <Image
                src={item.image}
                alt={item.title}
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
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <image
                      href={item.image}
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
                    {item.title}
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
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm text-center">{item.date}</p>
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
