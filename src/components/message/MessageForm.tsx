import { useState } from "react";

const colors = [
  "bg-yellow-300",
  "bg-blue-300",
  "bg-pink-300",
  "bg-green-300",
  "bg-purple-300",
  "bg-red-300",
];
const fonts = ["font-serif", "font-sans", "font-mono"];

interface MessageFormProps {
  onSubmit: (
    nickname: string,
    message: string,
    password: string,
    color: string,
    font: string
  ) => void;
}

export default function MessageForm({ onSubmit }: MessageFormProps) {
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedFont, setSelectedFont] = useState<string>(fonts[0]);

  const handleSubmit = () => {
    if (!nickname || !message || !password) {
      alert("닉네임, 메시지, 비밀번호를 입력해주세요.");
      return;
    }
    if (message.length > 100) {
      alert("메시지는 100자 이하로 입력해주세요.");
      return;
    }
    if (!/^\d{6}$/.test(password)) {
      alert("비밀번호는 6자리 숫자로 입력해주세요.");
      return;
    }

    onSubmit(nickname, message, password, selectedColor, selectedFont);

    setNickname("");
    setMessage("");
    setPassword("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
      {/* 닉네임 입력 */}
      <input
        type="text"
        className="w-full p-3 rounded bg-gray-700 border border-gray-500 focus:border-[#8FBF8F] focus:ring-2 focus:ring-[#A6D0A6] outline-none transition-all text-center text-lg"
        placeholder="닉네임 입력"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      {/* 메시지 입력 */}
      <textarea
        className="w-full p-3 rounded bg-gray-700 border border-gray-500 focus:border-[#8FBF8F] focus:ring-2 focus:ring-[#A6D0A6] outline-none transition-all text-center text-lg mt-3"
        placeholder="최대 100자 메시지 입력"
        maxLength={100}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* 비밀번호 입력 */}
      <input
        type="password"
        className="w-full p-3 rounded bg-gray-700 border border-gray-500 focus:border-[#8FBF8F] focus:ring-2 focus:ring-[#A6D0A6] outline-none transition-all text-center text-lg mt-3"
        placeholder="6자리 비밀번호 입력"
        maxLength={6}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* 색상 선택 */}
      <div className="mt-4">
        <p className="text-center text-gray-300 mb-2">🎨 메모 색상 선택</p>
        <div className="flex justify-center gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110 ${
                selectedColor === color ? "ring-4 ring-[#A6D0A6]" : ""
              } ${color}`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* 폰트 선택 */}
      <div className="mt-4">
        <p className="text-center text-gray-300 mb-2">📝 글꼴 선택</p>
        <div className="flex justify-center gap-2">
          {fonts.map((font) => (
            <button
              key={font}
              className={`px-4 py-2 rounded-md text-lg shadow-md transition-transform transform hover:scale-110 ${
                selectedFont === font
                  ? "bg-[#A6D0A6] text-gray-900"
                  : "bg-gray-700"
              }`}
              onClick={() => setSelectedFont(font)}
            >
              가
            </button>
          ))}
        </div>
      </div>

      {/* 메시지 등록 버튼 */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-gradient-to-r from-[#8FBF8F] to-[#A6D0A6] px-6 py-3 rounded-lg text-gray-900 text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        🎉 메시지 남기기
      </button>
    </div>
  );
}
