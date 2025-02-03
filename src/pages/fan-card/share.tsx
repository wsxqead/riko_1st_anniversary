import { useState } from "react";

export default function FanCardShare() {
  const [nickname, setNickname] = useState("");
  const [cardNumber] = useState(Math.floor(100000 + Math.random() * 900000));
  const [selectedImage, setSelectedImage] = useState("riko1.png");

  const tweetText = `🎉 유즈하 리코 1주년 팬 회원증 생성! 🎉%0A💳 닉네임: ${
    nickname || "닉네임"
  }%0A🔢 회원번호: ${cardNumber}%0A🔗 나도 만들기: https://riko-1st-anniversary.com/fan-card`;

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🐦 팬 회원증 X(Twitter) 공유</h1>
      <p className="mb-4">닉네임을 입력하고 회원증을 공유하세요!</p>

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
          {["riko1.png", "riko2.png", "riko3.png"].map((img) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt="리코 이미지"
              className={`w-20 h-20 rounded cursor-pointer ${
                selectedImage === img ? "border-4 border-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-xl">🎉 유즈하 리코 1주년 🎉</p>
        <img
          src={`/images/${selectedImage}`}
          alt="회원증 이미지"
          className="w-32 h-32 mx-auto my-4"
        />
        <p className="mt-2 text-lg">{nickname ? nickname : "닉네임"} 님</p>
        <p className="text-sm">회원번호: {cardNumber}</p>
      </div>

      <button
        onClick={shareOnTwitter}
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        X(Twitter) 공유하기
      </button>
    </div>
  );
}
