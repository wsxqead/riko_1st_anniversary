import { useState } from "react";
import Image from "next/image";
import { coversData } from "@/data/coversData";
import { shortsData } from "@/data/shortsData";
import { cloudSongs } from "@/data/cloudData";
import SectionTitle from "@/components/SectionTitle";

import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const getYoutubeThumbnail = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/embed\/|.*\/v\/|shorts\/))([^&?]+)/
  );
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "/images/default_thumb.jpg";
};

export default function CoversArchive() {
  const { t } = useTranslation("common");
  const tabs = [
    { id: "official", label: t("covers.tabs.official") },
    { id: "shorts", label: t("covers.tabs.shorts") },
    { id: "cloud", label: t("covers.tabs.cloud") },
  ];

  const [selectedTab, setSelectedTab] = useState<
    "official" | "shorts" | "cloud"
  >("official");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getData = () => {
    switch (selectedTab) {
      case "official":
        return coversData;
      case "shorts":
        return shortsData.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoUrl),
        }));
      case "cloud":
        return cloudSongs.map((item) => ({
          ...item,
          image: getYoutubeThumbnail(item.videoThumUrl),
        }));
      default:
        return coversData;
    }
  };

  const handleClick = (videoUrl: string) => {
    if (selectedTab === "shorts") {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
    } else {
      setSelectedVideo(videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 px-4 transition-all">
      <SectionTitle
        title={t("covers.title")}
        description={t("covers.description")}
        colorClass="text-sky-500"
      />

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-2 rounded-lg font-semibold text-lg transition keep-all ${
              selectedTab === tab.id
                ? "bg-[#a6d0a6] text-gray-900 shadow-lg scale-105"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {getData().map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-64 rounded-lg shadow-lg cursor-pointer overflow-hidden"
            onClick={() => handleClick(item.videoUrl)}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-75">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
