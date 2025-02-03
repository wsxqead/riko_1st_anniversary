import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image"; // ✅ next/image 추가

export default function FanCardGenerator() {
  const [nickname, setNickname] = useState("");
  const [selectedImage, setSelectedImage] = useState("riko_001.png");
  const [cardNumber] = useState(Math.floor(100000 + Math.random() * 900000));

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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">💳 리코 1주년 팬 회원증 생성</h1>
      <p className="mb-4">닉네임을 입력하고 원하는 이미지를 선택하세요!</p>

      <input
        type="text"
        placeholder="닉네임 입력"
        className="p-2 rounded bg-gray-700 mb-4"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <div className="mb-4">
        <p className="text-lg mb-2">회원증 이미지 선택:</p>
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
              className="cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/images/${img}`}
                alt="리코 이미지"
                width={80} // ✅ 필수 설정
                height={80} // ✅ 필수 설정
                className={`rounded ${
                  selectedImage === img ? "border-4 border-blue-500" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-xl">🎉 유즈하 리코 1주년 🎉</p>
        <Image
          src={`/images/${selectedImage}`}
          alt="회원증 이미지"
          width={150} // ✅ 크기 조정
          height={150} // ✅ 크기 조정
          className="mx-auto my-4"
        />
        <p className="mt-2 text-lg">{nickname ? nickname : "닉네임"} 님</p>
        <p className="text-sm">회원번호: {cardNumber}</p>
      </div>

      <button
        onClick={saveFanCard}
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        회원증 저장
      </button>
    </div>
  );
}
