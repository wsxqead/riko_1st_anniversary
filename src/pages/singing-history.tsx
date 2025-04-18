import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { songData } from "@/data/songData";

export default function SingingHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortOrder, setSortOrder] = useState("latest");
  const [languageFilter, setLanguageFilter] = useState("all");

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3); // 모바일에서는 3개씩 표시
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4); // 태블릿에서는 4개
      } else {
        setItemsPerPage(6); // PC에서는 6개
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const sortedSongs = [...songData].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.lastSung).getTime() - new Date(a.lastSung).getTime();
    } else if (sortOrder === "mostSung") {
      return b.count - a.count;
    }
    return 0;
  });

  const filteredSongs =
    languageFilter === "all"
      ? sortedSongs
      : sortedSongs.filter((song) => song.language === languageFilter);

  const totalPages = Math.ceil(filteredSongs.length / itemsPerPage);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-12 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎤 리코의 플레이 리스트
      </motion.h1>
      <p className="mb-6 text-base sm:text-lg text-gray-300 text-center">
        리코가 부른 방송중 부른 노래들을 최신순 또는 많이 부른 횟수순으로 정렬하고, 원하는
        언어별로 필터링할 수 있어요! 🎶
      </p>

      {/* 정렬 및 필터링 옵션 */}
      <div className="flex flex-wrap gap-4 mb-6 w-full max-w-2xl justify-center">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 w-38 rounded bg-gray-800 text-white border border-gray-500 shadow-md"
        >
          <option value="latest">🕒 최신순</option>
          <option value="mostSung">🎤 많이 부른 순</option>
        </select>

        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="p-2 w-38 rounded bg-gray-800 text-white border border-gray-500 shadow-md"
        >
          <option value="all">🌍 모든 곡</option>
          <option value="한식">🇰🇷 한국곡</option>
          <option value="양식">🇺🇸 서양곡</option>
          <option value="일식">🇯🇵 일본곡</option>
        </select>
      </div>

      {/* 🎶 방종곡 리스트 테이블 */}
      <div className="w-full max-w-4xl bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
        <table className="w-full text-left text-sm sm:text-base">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2 sm:py-3 text-[#A6D0A6]">곡 제목</th>
              <th className="py-2 sm:py-3 text-center text-[#A6D0A6]">
                부른 횟수
              </th>
              <th className="py-2 sm:py-3 text-right text-[#A6D0A6]">
                마지막 부른 날짜
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedSongs.map((song, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="py-2 sm:py-4 px-4 font-semibold">
                  {song.title}
                </td>
                <td className="py-2 sm:py-4 px-4 text-center text-yellow-300 font-bold">
                  {song.count}회
                </td>
                <td className="py-2 sm:py-4 px-4 text-right">
                  {song.lastSung}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🎥 영상 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 w-full max-w-4xl">
        {paginatedSongs.map((song, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <p className="text-base sm:text-lg font-semibold text-center text-white mb-2">
              🎶 {song.title} ({song.count}회)
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

      {/* 페이지네이션 버튼 */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-lg font-semibold transition ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          ◀ 이전
        </button>
        <span className="text-sm sm:text-lg text-gray-300">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-lg font-semibold transition ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          다음 ▶
        </button>
      </div>
    </div>
  );
}
