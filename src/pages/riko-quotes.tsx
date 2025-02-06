import { useState } from "react";

export default function RikoQuotes() {
  const quotes = [
    { text: "오늘도 와줘서 고마워! 💙", audio: "/audio/quote1.mp3" },
    { text: "이거 마왕보다 어려운 거 아냐!?", audio: "/audio/quote2.mp3" },
    { text: "팬들이 있어서 난 뭐든 할 수 있어!", audio: "/audio/quote3.mp3" },
    {
      text: "끝까지 포기하지 않으면, 언젠간 해낼 수 있어!",
      audio: "/audio/quote4.mp3",
    },
    { text: "우리 다 같이 행복하게 지내자~!", audio: "/audio/quote5.mp3" },
  ];

  const [remainingQuotes, setRemainingQuotes] = useState([...quotes]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    if (remainingQuotes.length === 0) {
      setRemainingQuotes([...quotes]); // 모든 명언이 나오면 다시 초기화
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    const newQuote = remainingQuotes[randomIndex];

    setRemainingQuotes((prev) => prev.filter((q) => q.text !== newQuote.text));
    setCurrentQuote(newQuote);

    // ✅ 해당 명언의 MP3 파일 재생
    const audio = new Audio(newQuote.audio);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
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
