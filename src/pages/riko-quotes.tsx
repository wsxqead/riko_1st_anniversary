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

    // 해당 명언의 MP3 파일 재생
    const audio = new Audio(newQuote?.audio);
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16">
      <h1 className="text-3xl font-bold mb-4">🗨️ 리코의 명언</h1>
      <p className="mb-6 text-lg">
        리코의 방송 속 명언을 다시 한번 되새겨보세요!
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-xl font-semibold">{currentQuote.text}</p>
      </div>
      <button
        onClick={getRandomQuote}
        className="mt-4 bg-blue-500 px-4 py-2 rounded text-white"
      >
        🔄 랜덤 명언 보기
      </button>
    </div>
  );
}
