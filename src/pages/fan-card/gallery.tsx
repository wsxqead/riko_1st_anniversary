import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { FanCard } from "@/types/fanCard";
import SectionTitle from "@/components/SectionTitle";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://riko-1st-anniversary.vercel.app";

export default function FanCardGallery() {
  const [fanCards, setFanCards] = useState<DocumentData[]>([]);
  const [selectedCard, setSelectedCard] = useState<DocumentData | null>(null);

  useEffect(() => {
    const fetchFanCards = async () => {
      const querySnapshot = await getDocs(collection(db, "fanCards"));
      setFanCards(querySnapshot.docs.map((doc) => doc.data() as FanCard));
    };

    fetchFanCards();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getTwitterShareURL = (card: DocumentData) => {
    const tweetText = encodeURIComponent(
      `🎉 유즈하 리코 1주년 팬 회원증 생성!\n💳 닉네임: ${card.nickname}\n🔢 회원번호: ${card.cardNumber}\n🔗 나도 만들기: ${BASE_URL}/fan-card`
    );
    return `https://twitter.com/intent/tweet?text=${tweetText}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 transition-all px-4">
      <SectionTitle
        title="📸 팬 회원증 갤러리"
        colorClass="text-purple-500"
        description="팬들이 생성한 회원증을 확인하세요! 💚"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fanCards.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
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
                <Image
                  src={`/images/${card.image || "riko_001.png"}`}
                  alt="회원증 이미지"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>

              <div className="flex flex-col mt-2 leading-tight text-white">
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

              <div className="absolute bottom-2 right-3 text-xs text-gray-100 dark:text-gray-300">
                © 2025 Riko Anniversary
              </div>
            </div>
          ))
        )}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-[38rem] h-[24rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-2xl p-6 flex items-center border border-gray-300 hover:shadow-green-500 transition-all">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-6 text-gray-900 text-2xl font-bold hover:text-gray-600 transition"
            >
              ✕
            </button>

            <div className="absolute left-8 top-1/3 transform -translate-y-1/3 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={`/images/${selectedCard.image || "riko_001.png"}`}
                alt="회원증 이미지"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute bottom-6 left-8 flex flex-col items-start text-left leading-relaxed text-gray-900 dark:text-white">
              <h3 className="text-xl font-bold">
                닉네임: {selectedCard.nickname}
              </h3>
              <p className="text-xl font-bold mt-2">
                회원코드: {selectedCard.cardNumber}
              </p>
            </div>

            <a
              href={getTwitterShareURL(selectedCard)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-24 right-12 bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              X 공유하기
            </a>

            <div className="absolute bottom-14 right-10 bg-white p-3 rounded-lg shadow-lg">
              <QRCodeCanvas
                value={`${BASE_URL}/fan-card/${selectedCard.cardNumber}`}
                size={110}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>

            <p className="absolute bottom-6 right-10 text-xs text-gray-800 dark:text-gray-300">
              © 2025 Riko Anniversary
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
