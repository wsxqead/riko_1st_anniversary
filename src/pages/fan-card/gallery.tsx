import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import Image from "next/image";

export default function FanCardGallery() {
  const [fanCards, setFanCards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchFanCards = async () => {
      const querySnapshot = await getDocs(collection(db, "fanCards"));
      setFanCards(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchFanCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-[#a6d0a6] drop-shadow-lg text-center">
        📸 팬 회원증 갤러리
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        팬들이 생성한 회원증을 확인하세요! 💚
      </p>

      {/* 🔹 팬 회원증 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fanCards.length === 0 ? (
          <p className="text-center text-gray-400">
            아직 생성된 회원증이 없습니다.
          </p>
        ) : (
          fanCards.map((card, index) => (
            <div
              key={index}
              className="relative w-[20rem] h-[12rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-2xl shadow-lg p-4 flex flex-col justify-between border border-gray-300 hover:shadow-green-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-wide text-white flex items-center">
                  ⭐ 유즈하 리코 1주년 ⭐
                </h3>
                {/* 🔹 기본 이미지 적용 */}
                <Image
                  src={`/images/${card.image || "riko_001.png"}`} // ✅ 이미지 없을 경우 기본 이미지 사용
                  alt="회원증 이미지"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* 🔹 닉네임과 회원번호 정렬 */}
              <div className="flex flex-col items-left text-gray-900 mt-2 text-lg leading-tight">
                <p className="font-semibold">
                  {card.nickname || "닉네임 없음"}
                </p>
                <p className="text-sm">
                  회원번호:{" "}
                  <span className="font-mono text-xl font-bold">
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
    </div>
  );
}
