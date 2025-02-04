import { useState, useEffect } from "react";

const songData = [
  { title: "어른", lastSung: "2025.02.10", count: 15, language: "한식", link: "https://www.youtube.com/embed/XXXXX" },
  { title: "Phony", lastSung: "2025.01.25", count: 12, language: "일식", link: "https://www.youtube.com/embed/YYYYY" },
  { title: "ECHO", lastSung: "2025.01.20", count: 8, language: "양식", link: "https://www.youtube.com/embed/ZZZZZ" },
  { title: "밤하늘에", lastSung: "2025.01.15", count: 6, language: "한식", link: "https://www.youtube.com/embed/WWWWW" },
  { title: "케세라세라", lastSung: "2025.01.10", count: 5, language: "일식", link: "https://www.youtube.com/embed/VVVVV" },
  { title: "입춘", lastSung: "2025.01.05", count: 4, language: "한식", link: "https://www.youtube.com/embed/UUUUU" },
];

export default function SingingHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortOrder, setSortOrder] = useState("latest"); // 정렬 옵션
  const [languageFilter, setLanguageFilter] = useState("all"); // 언어 필터링

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // 곡 정렬 로직
  const sortedSongs = [...songData].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.lastSung).getTime() - new Date(a.lastSung).getTime();
    } else if (sortOrder === "mostSung") {
      return b.count - a.count;
    }
    return 0;
  });

  // 필터링 로직 (언어별 필터)
  const filteredSongs = languageFilter === "all" ? sortedSongs : sortedSongs.filter(song => song.language === languageFilter);

  // 페이지네이션 적용
  const totalPages = Math.ceil(filteredSongs.length / itemsPerPage);
  const paginatedSongs = filteredSongs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-[#A6D0A6] drop-shadow-lg text-center">
        🎤 리코의 방종곡 리스트
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코가 부른 방종곡을 최신순 또는 많이 부른 횟수순으로 정렬하고, 원하는 언어별로 필터링할 수 있어요! 🎶
      </p>

      {/* 정렬 및 필터링 옵션 */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-500 shadow-md"
        >
          <option value="latest">🕒 최신순</option>
          <option value="mostSung">🎤 많이 부른 순</option>
        </select>

        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-500 shadow-md"
        >
          <option value="all">🌍 모든 곡</option>
          <option value="한식">🇰🇷 한국곡</option>
          <option value="양식">🇺🇸 서양곡</option>
          <option value="일식">🇯🇵 일본곡</option>
        </select>
      </div>

      {/* 🎶 방종곡 리스트 테이블 */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 text-[#A6D0A6] text-lg">곡 제목</th>
              <th className="py-3 text-center text-[#A6D0A6] text-lg">부른 횟수</th>
              <th className="py-3 text-right text-[#A6D0A6] text-lg">마지막 부른 날짜</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSongs.map((song, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition">
                <td className="py-4 px-4 font-semibold">{song.title}</td>
                <td className="py-4 px-4 text-center text-yellow-300 font-bold">{song.count}회</td>
                <td className="py-4 px-4 text-right">{song.lastSung}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🎥 영상 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
        {paginatedSongs.map((song, index) => (
          <div key={index} className="w-full bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
            <p className="text-lg font-semibold text-center text-white mb-2">
              🎶 {song.title} ({song.count}회)
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={song.link}
                className="w-full h-48 rounded-lg"
                allowFullScreen
                title={`Singing ${song.title}`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 버튼 */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          ◀ 이전 페이지
        </button>
        <span className="text-lg text-gray-300">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          다음 페이지 ▶
        </button>
      </div>
    </div>
  );
}
