import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";

export default function FanCardGenerator() {
  const [nickname, setNickname] = useState("");
  const [selectedImage, setSelectedImage] = useState("riko_001.png");
  const [cardNumber, setCardNumber] = useState<number | null>(null);

  useEffect(() => {
    setCardNumber(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const saveFanCard = async () => {
    if (!nickname) return alert("닉네임을 입력해주세요!");

    try {
      await addDoc(collection(db, "fanCards"), {
        nickname,
        cardNumber,
        image: selectedImage,
        createdAt: new Date(),
      });
      alert("회원증이 생성되었습니다!");
    } catch (error) {
      console.error("회원증 저장 실패:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-[#a6d0a6] drop-shadow-lg text-center">
        💳 리코 1주년 팬 회원증 생성
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        닉네임을 입력하고 원하는 이미지를 선택하세요! 💚
      </p>

      {/* 닉네임 입력 */}
      <input
        type="text"
        placeholder="닉네임 입력"
        className="p-3 w-80 rounded bg-gray-700 border border-gray-500 focus:border-[#8fbf8f] focus:ring-2 focus:ring-[#a6d0a6] outline-none transition-all text-center"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      {/* 이미지 선택 */}
      <div className="mt-6 mb-4">
        <p className="text-lg mb-3 text-center">📸 회원증 이미지 선택:</p>
        <div className="flex space-x-4">
          {[
            "riko_001.png",
            "riko_002.png",
            "riko_003.png",
            "riko_004.png",
            "riko_005.png",
          ].map((img) => (
            <div
              key={img}
              className={`cursor-pointer rounded-lg transition-transform transform ${
                selectedImage === img ? "scale-110 ring-4 ring-[#a6d0a6]" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/images/${img}`}
                alt="리코 이미지"
                width={110} // ✅ 크기 증가 (기존 100 → 110)
                height={110}
                className="rounded-lg shadow-md hover:shadow-lg transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 💳 전자 회원증 디자인 */}
      {cardNumber !== null && (
        <div className="relative w-[28rem] h-[18rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-2xl p-6 mt-6 flex flex-col justify-between border border-gray-300 hover:shadow-green-500 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold tracking-wide text-white flex items-center">
              ⭐ 유즈하 리코 1주년 ⭐
            </h3>
            {/* 🔹 이미지 크기 증가 및 스타일 변경 */}
            <Image
              src={`/images/${selectedImage}`}
              alt="회원증 이미지"
              width={120} // ✅ 크기 증가 (기존 90 → 120)
              height={120}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* 닉네임과 회원번호 중앙 정렬 */}
          <div className="flex flex-col items-left justify-center text-gray-900 mt-4 text-xl leading-tight">
            <p className="font-semibold">닉네임: {nickname || "닉네임"}</p>
            <p className="text-lg">
              회원번호:{" "}
              <span className="font-mono text-2xl font-bold">{cardNumber}</span>
            </p>
          </div>

          <div className="absolute bottom-4 right-5 text-gray-800 text-xs">
            © 2025 Riko Anniversary
          </div>
        </div>
      )}

      {/* 버튼 */}
      <button
        onClick={saveFanCard}
        className="mt-6 bg-gradient-to-r from-[#8fbf8f] to-[#a6d0a6] px-8 py-3 rounded-xl text-gray-900 text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        💚 회원증 저장하기
      </button>
    </div>
  );
}
