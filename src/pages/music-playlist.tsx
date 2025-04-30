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

  const getData = () => {
    switch (selectedTab) {
      case "리코 정식 커버곡":
        return coversData;
      case "리코 쇼츠":
        return shortsData.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoUrl),
        }));
      case "리코 클라우드":
        return cloudSongs.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoThumUrl),
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 px-4 transition-all">
      {/* 🔹 헤더 */}
      <motion.h1
        className="text-2xl md:text-4xl font-extrabold mb-12 text-[#a6d0a6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎤 리코의 커버곡 & 아카이브
      </motion.h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center">
        리코의 음악을 한 곳에서 만나보세요! 💚
      </p>

      {/* 🔹 탭 메뉴 */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold text-lg transition keep-all ${
              selectedTab === tab
                ? "bg-[#a6d0a6] text-gray-900 shadow-lg scale-105"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
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
            className="group relative w-full h-64 rounded-lg shadow-lg cursor-pointer overflow-hidden"
            onClick={() => handleClick(item.videoUrl)}
          >
            {/* 커버 이미지 (기본 상태) */}
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />

            {/* 마우스 오버 시 나타나는 오버레이 */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-75">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 모달 (유튜브 영상) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-2xl">
            <button
              className="absolute top-2 right-2 text-gray-900 dark:text-white text-2xl"
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
