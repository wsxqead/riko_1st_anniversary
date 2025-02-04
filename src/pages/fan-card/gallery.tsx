import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

export default function FanCardGallery() {
  const [fanCards, setFanCards] = useState<DocumentData[]>([]);
  const [selectedCard, setSelectedCard] = useState<DocumentData | null>(null);

  useEffect(() => {
    const fetchFanCards = async () => {
      const querySnapshot = await getDocs(collection(db, "fanCards"));
      setFanCards(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchFanCards();
  }, []);

  // X(Twitter) 공유 URL 생성
  const getTwitterShareURL = (card: DocumentData) => {
    const tweetText = encodeURIComponent(
      `🎉 유즈하 리코 1주년 팬 회원증 생성! \n🎉💳 닉네임: ${card.nickname}\n🔢 회원번호: ${card.cardNumber}\n🔗 나도 만들기: https://riko-1st-anniversary.com/fan-card`
    );
    return `https://twitter.com/intent/tweet?text=${tweetText}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-[#a6d0a6] drop-shadow-lg text-center">
        📸 팬 회원증 갤러리
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        팬들이 생성한 회원증을 확인하세요! 💚
      </p>

      {/* 🔹 팬 회원증 갤러리 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fanCards.length === 0 ? (
          <p className="text-center text-gray-400">
            아직 생성된 회원증이 없습니다.
          </p>
        ) : (
          fanCards.map((card, index) => (
            <div
              key={index}
              className="relative w-[20rem] h-[12rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-2xl shadow-lg p-4 flex flex-col justify-between border border-gray-300 hover:shadow-green-500 hover:scale-105 transition-all cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-wide text-white">
                  ⭐ 유즈하 리코 1주년
                </h3>
                {/* 🔹 기본 이미지 적용 */}
                <Image
                  src={`/images/${card.image || "riko_001.png"}`}
                  alt="회원증 이미지"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* 🔹 닉네임과 회원번호 정렬 */}
              <div className="flex flex-col items-left text-gray-900 mt-2 text-lg leading-tight">
                <p className="font-semibold">
                  닉네임: {card.nickname || "닉네임 없음"}
                </p>
                <p className="text-sm font-semibold">
                  회원번호:{" "}
                  <span className="font-mono text-xl font-semibold">
                    {card.cardNumber || "000000"}
                  </span>
                </p>
              </div>

              <div className="absolute bottom-2 right-3 text-gray-800 text-xs">
                © 2025 Riko Anniversary
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔹 상세보기 모달 */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative w-[38rem] h-[24rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-2xl p-6 flex items-center border border-gray-300 hover:shadow-green-500 transition-all">
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-6 text-gray-900 text-2xl font-bold hover:text-gray-600 transition"
            >
              ✕
            </button>

            {/* 리코 프로필 이미지 */}
            <div className="absolute left-8 top-1/3 transform -translate-y-1/3 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={`/images/${selectedCard.image || "riko_001.png"}`}
                alt="회원증 이미지"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* 닉네임 & 회원번호 */}
            <div className="absolute bottom-6 left-8 flex flex-col items-start text-left leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900">
                닉네임: {selectedCard.nickname}
              </h3>
              <p className="text-xl font-bold text-gray-900 mt-2">
                회원코드: {selectedCard.cardNumber}
              </p>
            </div>

            {/* 공유 버튼 → QR 코드 위로 이동 */}
            <div className="absolute top-24 right-12 bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition">
              <a
                href={getTwitterShareURL(selectedCard)}
                target="_blank"
                rel="noopener noreferrer"
              >
                X 공유하기
              </a>
            </div>

            {/* QR 코드 */}
            <div className="absolute bottom-14 right-10 bg-white p-3 rounded-lg shadow-lg">
              <QRCodeCanvas
                value={`https://riko-1st-anniversary.com/fan-card/${selectedCard.cardNumber}`}
                size={110}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>

            {/* Riko Anniversary */}
            <p className="absolute bottom-6 right-10 text-xs text-gray-700">
              © 2025 Riko Anniversary
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
