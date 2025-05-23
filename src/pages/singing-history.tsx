"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { songData, languages } from "@/data/songData";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

type SongDataType = (typeof songData)[number];

function extractYouTubeId(link: string): string | null {
  const match = link.match(/embed\/([a-zA-Z0-9_-]+)\?start=/);
  return match ? match[1] : null;
}

function getThumbnailUrl(link: string) {
  const videoId = extractYouTubeId(link);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

export default function SingingHistory() {
  const { t } = useTranslation("common");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [languageFilter, setLanguageFilter] = useState("all");
  const [activeSong, setActiveSong] = useState<SongDataType | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(3);
      else if (window.innerWidth < 1024) setItemsPerPage(4);
      else setItemsPerPage(8);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const filteredSongs =
    languageFilter === "all"
      ? songData
      : songData.filter((song) => song.language === languageFilter);

  const totalPages = Math.ceil(filteredSongs.length / itemsPerPage);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16">
      <SectionTitle title={t("singing.title")} colorClass="text-rose-500" />

      <p className="mb-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
        {t("singing.description.1")}{" "}
        <strong className="text-[#A6D0A6]">{t("singing.description.2")}</strong>
        <br />
        {t("singing.description.3")}
      </p>

      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              setLanguageFilter(lang);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              languageFilter === lang
                ? "bg-[#A6D0A6] text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600"
            }`}
          >
            {t(`singing.filter.${lang}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
        {paginatedSongs.map((song, index) => (
          <div
            key={index}
            className="relative group w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-2xl transition cursor-pointer"
            onClick={() => setActiveSong(song)}
          >
            <Image
              src={getThumbnailUrl(song.link)}
              alt={`${song.title} 썸네일`}
              width={640}
              height={360}
              className="rounded-md w-full aspect-video mb-3 object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-60 text-white text-4xl px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                ▶
              </div>
            </div>

            <p className="text-lg font-semibold text-center">{song.title}</p>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              {song.artist}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition ${
            currentPage === 1
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] dark:bg-[#5c8c5c] hover:bg-[#8FBF8F] dark:hover:bg-[#4a744a]"
          }`}
        >
          ◀
        </button>
        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition ${
            currentPage === totalPages
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] dark:bg-[#5c8c5c] hover:bg-[#8FBF8F] dark:hover:bg-[#4a744a]"
          }`}
        >
          ▶
        </button>
      </div>

      <AnimatePresence>
        {activeSong && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSong(null)}
          >
            <motion.div
              className="relative w-[90vw] max-w-6xl aspect-video"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${activeSong.link}&autoplay=1&mute=0`}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen"
                title={`Singing ${activeSong.title}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
