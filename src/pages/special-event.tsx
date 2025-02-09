"use client";

import { useState, useEffect } from "react";
import MessageDeleteModal from "@/components/message/MessageDeleteModal";
import MessageForm from "@/components/message/MessageForm";
import MessageList from "@/components/message/MessageList";

const END_DATE = new Date("2025-05-18T19:00:00Z");

export default function MessageBoard() {
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState<string>("");

  useEffect(() => {
    if (new Date() >= END_DATE) {
      setIsReadOnly(true);
    }
  }, []);

  // ❌ 삭제할 메시지 선택
  const handleDelete = (id: string) => {
    setDeleteId(id);
    setDeleteModalOpen(true);
  };

  // 🔥 삭제 모달 닫기
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteId(null);
    setDeletePassword("");
  };

  const handleSubmit = (
    nickname: string,
    message: string,
    password: string,
    color: string,
    font: string
  ) => {
    console.log("메시지 등록됨:", { nickname, message, password, color, font });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        📜 1주년 축하 메시지
      </h1>
      <p className="mb-6 text-lg text-center">
        리코에게 축하 메시지를 남겨주세요! 🎉
      </p>

      {!isReadOnly && <MessageForm onSubmit={handleSubmit} />}
      {isReadOnly && (
        <MessageList onDelete={handleDelete} isReadOnly={isReadOnly} />
      )}

      {/* 🔒 삭제 모달 */}
      {deleteId && (
        <MessageDeleteModal
          isOpen={deleteModalOpen}
          onClose={closeDeleteModal}
          deleteId={deleteId} //  삭제할 메시지 ID 전달
          deletePassword={deletePassword}
          setDeletePassword={setDeletePassword}
        />
      )}
    </div>
  );
}
