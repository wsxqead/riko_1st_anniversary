import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import SectionTitle from "@/components/SectionTitle";

export default function FanCardGenerator() {
  const [nickname, setNickname] = useState("");
  const [selectedImage, setSelectedImage] = useState("riko_001.png");
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const [qrSize, setQrSize] = useState(100);

  useEffect(() => {
    setCardNumber(Math.floor(100000 + Math.random() * 900000));
    if (typeof window !== "undefined") {
      setQrSize(window.innerWidth < 768 ? 80 : 100);
    }
  }, []);

  const qrValue = `https://riko-1st-anniversary.vercel.app/fan-card/${cardNumber}`;

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 px-4 transition-all">
      <SectionTitle
        title="💳 리코 1주년 팬 회원증 생성"
        colorClass="text-purple-500"
        description="닉네임을 입력하고 원하는 이미지를 선택하세요! 💚"
      />

      <input
        type="text"
        placeholder="닉네임 입력"
        className="p-3 w-full sm:w-80 rounded bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:border-[#8fbf8f] focus:ring-2 focus:ring-[#a6d0a6] outline-none transition-all text-center"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <div className="mt-6 mb-4">
        <p className="text-sm sm:text-lg mb-3 text-center">
          📸 회원증 이미지 선택:
        </p>
        <div className="grid grid-cols-3 sm:flex sm:space-x-4 gap-3">
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
                width={110}
                height={110}
                className="rounded-lg shadow-md hover:shadow-xl transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {cardNumber !== null && (
        <div className="relative w-full max-w-2xl h-64 md:h-80 bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-2xl p-6 mt-6 flex items-center border border-gray-300 hover:shadow-green-500 hover:shadow-md transition-all overflow-hidden">
          <div className="absolute left-6 top-1/3 transform -translate-y-1/3 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={`/images/${selectedImage}`}
              alt="회원증 이미지"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="object-cover"
            />
          </div>
          <div className="absolute left-6 bottom-8 text-left">
            <h3 className="text-sm md:text-lg font-bold text-gray-900">
              닉네임: {nickname || "닉네임"}
            </h3>
            <p className="text-sm md:text-lg font-bold text-gray-900 mt-1">
              회원코드: {cardNumber}
            </p>
          </div>

          <p className="absolute top-8 right-6 text-gray-900 text-xs md:text-sm font-semibold text-right">
            <Image
              src="/images/main_logo_w.png"
              alt="메인 로고"
              width={130}
              height={80}
            />
          </p>

          <div className="absolute right-6 top-1/4 transform translate-y-1/3 bg-white p-2 md:p-3 rounded-lg shadow-lg">
            <QRCodeCanvas
              value={qrValue}
              size={qrSize}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>

          <p className="absolute bottom-6 right-6 text-[10px] sm:text-xs text-gray-700 dark:text-gray-300">
            © 2025 Riko 1st Anniversary
          </p>
        </div>
      )}

      <button
        onClick={saveFanCard}
        className="mt-6 bg-gradient-to-r from-[#8fbf8f] to-[#a6d0a6] px-6 sm:px-8 py-3 rounded-xl text-gray-900 dark:text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        💚 회원증 저장하기
      </button>
    </div>
  );
}
