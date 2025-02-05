import Image from "next/image";
import { useState } from "react";

export default function SpecialEvent() {
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketNumber] = useState(Math.floor(100000 + Math.random() * 900000));

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        🎟️ 1주년 기념 특별 이벤트
      </h1>
      <p className="mb-8 text-lg text-center text-gray-300">
        리코의 1주년을 기념하여 특별한 이벤트를 준비했어요! 팬 여러분께 가상의
        이벤트 티켓을 발급해드립니다.
      </p>

      {/* 이벤트 티켓 이미지 */}
      <div className="w-full max-w-md">
        {!ticketGenerated ? (
          <Image
            src={`/images/ticket/001.png`}
            alt="티켓 이미지"
            layout="responsive"
            width={567}
            height={265}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <Image
            src={`/images/ticket/002.png`}
            alt="티켓 이미지"
            layout="responsive"
            width={567}
            height={265}
            className="rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* 버튼과 간격 추가 */}
      <div className="mt-6">
        {!ticketGenerated ? (
          <button
            onClick={() => setTicketGenerated(true)}
            className="bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition transform"
          >
            🎫 가상의 티켓 받기
          </button>
        ) : (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mt-6 w-full max-w-md">
            <p className="text-xl font-bold text-[#A6D0A6]">
              🎉 유즈하 리코 1주년 기념 이벤트 🎉
            </p>
            <p className="mt-4 text-lg">
              🔢 티켓 번호:{" "}
              <span className="text-blue-400 font-mono text-2xl">
                {ticketNumber}
              </span>
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              이 티켓은 기념용이며 실제 이벤트 참여용이 아닙니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
