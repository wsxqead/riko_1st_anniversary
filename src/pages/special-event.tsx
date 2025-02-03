import { useState } from "react";

export default function SpecialEvent() {
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketNumber] = useState(Math.floor(100000 + Math.random() * 900000));

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎟️ 1주년 기념 특별 이벤트</h1>
      <p className="mb-6 text-lg text-center">
        리코의 1주년을 기념하여 특별한 이벤트를 준비했어요!  
        팬 여러분께 가상의 이벤트 티켓을 발급해드립니다.  
      </p>

      {!ticketGenerated ? (
        <button
          onClick={() => setTicketGenerated(true)}
          className="bg-blue-500 px-6 py-3 rounded text-white text-lg"
        >
          🎫 가상의 티켓 받기
        </button>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <p className="text-xl">🎉 유즈하 리코 1주년 기념 이벤트 🎉</p>
          <p className="mt-4 text-lg">🔢 티켓 번호: <span className="text-blue-400">{ticketNumber}</span></p>
          <p className="mt-2 text-gray-400">이 티켓은 기념용이며 실제 이벤트 참여용이 아닙니다.</p>
        </div>
      )}
    </div>
  );
}
