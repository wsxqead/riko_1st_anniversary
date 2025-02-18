import { useState, useEffect, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  startAfter,
  Timestamp,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/firebase";
import { Message } from "@/types/message";

interface MessageListProps {
  onDelete: (id: string) => void;
  isReadOnly: boolean;
}

const PAGE_SIZE = 12;

export default function MessageList({
  onDelete,
  isReadOnly,
}: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(true);

  // ✅ useCallback을 사용하여 의존성 문제 해결
  const fetchMessages = useCallback(async () => {
    if (!isReadOnly) return;

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
        password: docData.password,
        backgroundPattern: docData.backgroundPattern,
        borderStyle: docData.borderStyle,
        createdAt: (docData.createdAt as Timestamp).toDate(),
      };
    });

    if (!querySnapshot.empty) {
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }

    setMessages(data);
    setHasMoreMessages(querySnapshot.docs.length === PAGE_SIZE); // 다음 페이지가 있는지 확인
  }, [isReadOnly, lastDoc]); // ✅ 의존성 배열에 필요한 값만 포함

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]); // ✅ useEffect 내부에서 fetchMessages 호출

  return (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded-lg shadow-md ${msg.color} ${msg.borderStyle} ${msg.backgroundPattern}`}
          >
            <p className="text-sm font-bold">{msg.nickname}</p>
            <p className="text-lg">{msg.message}</p>
            <button
              className="mt-2 text-red-400 hover:text-red-600 text-sm"
              onClick={() => onDelete(msg.id)}
            >
              ❌ 삭제
            </button>
          </div>
        ))}
      </div>

      {/*  페이지네이션 */}
      <div className="flex justify-center space-x-4 mt-6">
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
          disabled={!hasMoreMessages}
          className={`px-4 py-2 rounded ${
            !hasMoreMessages ? "bg-gray-600" : "bg-blue-500"
          }`}
        >
          다음 ▶
        </button>
      </div>
    </div>
  );
}
