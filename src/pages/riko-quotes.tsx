import { quotes } from "@/data/wiseSaying";
import { useState } from "react";

export default function RikoQuotes() {
  const [remainingQuotes, setRemainingQuotes] = useState([...quotes]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    let updatedQuotes = [...remainingQuotes];

    if (updatedQuotes.length === 0) {
      updatedQuotes = [...quotes]; // 🔥 모든 명언을 본 후 초기화
    }

    const randomIndex = Math.floor(Math.random() * updatedQuotes.length);
    const newQuote = updatedQuotes[randomIndex];

    setRemainingQuotes(updatedQuotes.filter((q) => q.text !== newQuote.text));
    setCurrentQuote(newQuote);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 transition-all">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">
        🗨️ 리코의 이쁜 말 & 귀여운 순간들
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        리코의 이쁜 말, 귀여운 리액션, 기억에 남는 장면들을 모아봤어요! 다시
        보면 더 웃기고, 더 감동적일지도 몰라요 😊
      </p>

      {/* 🎥 영상 액자 스타일 */}
      <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-xl max-w-2xl transition-all border-4 border-gray-300 dark:border-gray-700">
        <div
          className={`relative w-full ${
            currentQuote.video.includes("chzzk")
              ? "aspect-[9/16]"
              : "aspect-[16/9]"
          }`}
        >
          {currentQuote.video.includes("chzzk") ||
          currentQuote.video.includes("youtube") ? (
            <iframe
              src={currentQuote.video}
              className="w-full h-full rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-lg"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              src={currentQuote.video}
              controls
              className="w-full h-full rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-lg"
            />
          )}
        </div>

        {/* 🎤 하단 명언 표시 */}
        <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 text-center rounded-lg">
          <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
            {currentQuote.text}
          </p>
        </div>
      </div>

      {/* 🔄 랜덤 명언 버튼 */}
      <button
        onClick={getRandomQuote}
        className="mt-6 bg-blue-500 dark:bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-md transition-all hover:scale-105 hover:bg-blue-600 dark:hover:bg-blue-700"
      >
        🔄 다른 장면 보기
      </button>
    </div>
  );
}
