"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  limit,
  startAfter,
  Timestamp,
  deleteDoc,
  doc,
  where,
  DocumentData,
} from "firebase/firestore";

const MESSAGE_LIMIT = 100; // 🔥 메시지 100자 제한
const PAGE_SIZE = 12; // 🔥 페이징 크기
const END_DATE = new Date("2025-02-06T12:00:00Z"); // new Date("2025-05-18T19:00:00Z");

const colors = [
  "bg-yellow-300",
  "bg-blue-300",
  "bg-pink-300",
  "bg-green-300",
  "bg-purple-300",
  "bg-red-300",
];
const fonts = ["font-serif", "font-sans", "font-mono"];

interface Message {
  id: string;
  nickname: string;
  message: string;
  color: string;
  font: string;
  password: string;
  createdAt: Date;
}

export default function MessageBoard() {
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedFont, setSelectedFont] = useState<string>(fonts[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState<string>("");

  useEffect(() => {
    if (new Date() >= END_DATE) {
      setIsReadOnly(true);
      fetchMessages();
    }
  }, [page]);

  const fetchMessages = async () => {
    if (new Date() < END_DATE) return; // 🔥 2025년 5월 18일 전에는 안 보여줌

    let q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(PAGE_SIZE)
    );

    if (lastDoc) {
      q = query(
        collection(db, "messages"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(PAGE_SIZE)
      );
    }

    const querySnapshot = await getDocs(q);
    const data: Message[] = querySnapshot.docs.map((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        nickname: docData.nickname,
        message: docData.message,
        color: docData.color,
        font: docData.font,
        password: docData.password,
        createdAt: (docData.createdAt as Timestamp).toDate(),
      };
    });

    if (!querySnapshot.empty) {
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }

    setMessages(data);
  };

  const handleSubmit = async () => {
    if (!nickname || !message || !password)
      return alert("닉네임, 메시지, 비밀번호를 입력해주세요.");
    if (message.length > MESSAGE_LIMIT)
      return alert(`메시지는 ${MESSAGE_LIMIT}자 이하로 입력해주세요.`);
    if (!/^\d{6}$/.test(password))
      return alert("비밀번호는 6자리 숫자로 입력해주세요.");

    const newMessage: Omit<Message, "id"> = {
      nickname,
      message,
      color: selectedColor,
      font: selectedFont,
      password,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        ...newMessage,
        createdAt: Timestamp.fromDate(newMessage.createdAt),
      });
      setMessages((prev) => [{ id: docRef.id, ...newMessage }, ...prev]);
      setNickname("");
      setMessage("");
      setPassword("");
    } catch (error) {
      console.error("메시지 저장 실패:", error);
    }
  };

  // 🔥 메시지 삭제
  const handleDelete = async () => {
    if (!deleteId || !deletePassword) return alert("비밀번호를 입력해주세요.");

    const messageRef = doc(db, "messages", deleteId);
    const q = query(
      collection(db, "messages"),
      where("password", "==", deletePassword)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      try {
        await deleteDoc(messageRef);
        setMessages(messages.filter((msg) => msg.id !== deleteId));
        closeDeleteModal();
        alert("메시지가 삭제되었습니다!");
      } catch (error) {
        console.error("메시지 삭제 실패:", error);
      }
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  };

  // 🔥 삭제 모달 열기
  const openDeleteModal = (id: string) => {
    setDeleteId(id);
    setDeletePassword("");
    setDeleteModalOpen(true);
  };

  // 🔥 삭제 모달 닫기
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteId(null);
    setDeletePassword("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        📜 1주년 축하 메시지
      </h1>
      <p className="mb-6 text-lg text-center">
        리코에게 축하 메시지를 남겨주세요! 🎉
      </p>

      {!isReadOnly && (
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
            maxLength={MESSAGE_LIMIT}
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
      )}

      {/* 메시지 목록 및 삭제 */}
      {isReadOnly && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-4 rounded-lg shadow-md ${msg.color} ${msg.font}`}
              >
                <p className="text-sm font-bold">{msg.nickname}</p>
                <p className="text-lg">{msg.message}</p>
                <button
                  className="mt-2 text-red-400 hover:text-red-600 text-sm"
                  onClick={() => openDeleteModal(msg.id)}
                >
                  ❌ 삭제
                </button>
              </div>
            ))}
          </div>

          {/* 🔒 삭제 모달 */}
          {deleteModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm">
                <h3 className="text-xl font-bold text-center">
                  🔒 메시지 삭제
                </h3>
                <input
                  type="password"
                  className="w-full p-3 mt-4 rounded bg-gray-700 text-center"
                  placeholder="비밀번호 입력"
                  maxLength={6}
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                />
                <div className="flex justify-between mt-4">
                  <button onClick={closeDeleteModal} className="text-gray-400">
                    ❌ 닫기
                  </button>
                  <button onClick={handleDelete} className="text-red-400">
                    🗑 삭제
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 페이지네이션 */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${
                page === 1 ? "bg-gray-600" : "bg-blue-500"
              }`}
            >
              ◀ 이전
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 rounded"
            >
              다음 ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}
