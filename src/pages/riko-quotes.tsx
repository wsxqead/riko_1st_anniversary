import { useState } from "react";

export default function RikoQuotes() {
  const quotes = [
    "오늘도 와줘서 고마워! 💙",
    "이거 마왕보다 어려운 거 아냐!?",
    "팬들이 있어서 난 뭐든 할 수 있어!",
    "끝까지 포기하지 않으면, 언젠간 해낼 수 있어!",
    "우리 다 같이 행복하게 지내자~!",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🗨️ 리코의 명언</h1>
      <p className="mb-6 text-lg">
        리코의 방송 속 명언을 다시 한번 되새겨보세요!
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-xl font-semibold">{quote}</p>
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
