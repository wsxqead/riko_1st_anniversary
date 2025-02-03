import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function FanCardQR() {
  const [nickname, setNickname] = useState("");
  const [cardNumber] = useState(Math.floor(100000 + Math.random() * 900000));
  const [generated, setGenerated] = useState(false);

  const qrValue = `https://riko-1st-anniversary.com/fan-card/${cardNumber}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📱 팬 회원증 QR 코드 생성</h1>
      <p className="mb-4">닉네임을 입력하고 QR 코드를 생성하세요!</p>

      <input
        type="text"
        placeholder="닉네임 입력"
        className="p-2 rounded bg-gray-700 mb-4"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <button
        onClick={() => setGenerated(true)}
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        QR 코드 생성
      </button>

      {generated && (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <p className="text-xl mb-2">📱 {nickname || "닉네임"} 님의 회원증</p>
          <QRCodeCanvas
            value={qrValue}
            size={150}
            bgColor="#ffffff"
            fgColor="#000000"
          />
          <p className="text-sm mt-2 text-gray-400">
            QR 코드를 스캔하여 회원증 확인
          </p>
        </div>
      )}
    </div>
  );
}
