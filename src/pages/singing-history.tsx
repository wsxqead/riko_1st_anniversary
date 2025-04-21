import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { songData } from "@/data/songData";

export default function SingingHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [languageFilter, setLanguageFilter] = useState("all");

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(3);
      else if (window.innerWidth < 1024) setItemsPerPage(4);
      else setItemsPerPage(6);
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
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-12 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎤 리코의 노래 방송 다시보기
      </motion.h1>
      <p className="mb-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
        리코가 노래를 많이 불렀던 방송 중,
        <br />
        <strong className="text-[#A6D0A6]">
          유튜브에 다시보기 영상으로 업로드된 방송
        </strong>
        만 정리했어요.
        <br />
        커버곡은 별도의 컬렉션 페이지에서 확인해 주세요. 🎶
      </p>

      {/* 정렬 및 필터링 옵션 */}
      <div className="flex flex-wrap gap-4 mb-6 w-full max-w-2xl justify-center">
        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="p-2 w-40 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600 shadow-md"
        >
          <option value="all">🌍 모든 곡</option>
          <option value="한식">🇰🇷 한국곡</option>
          <option value="양식">🇺🇸 서양곡</option>
          <option value="일식">🇯🇵 일본곡</option>
        </select>
      </div>

      {/* 영상 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
        {paginatedSongs.map((song, index) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-2xl transition"
          >
            <p className="text-base sm:text-lg font-semibold text-center mb-2">
              🎶 {song.title}
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={song.link}
                className="w-full h-40 sm:h-48 rounded-lg"
                allowFullScreen
                title={`Singing ${song.title}`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
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
          ◀ 이전
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
          다음 ▶
        </button>
      </div>
    </div>
  );
}
