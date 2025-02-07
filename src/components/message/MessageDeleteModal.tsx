import {
  deleteDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";

interface MessageDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  deleteId: string;
  deletePassword: string;
  setDeletePassword: (password: string) => void;
}

export default function MessageDeleteModal({
  isOpen,
  onClose,
  deleteId,
  deletePassword,
  setDeletePassword,
}: MessageDeleteModalProps) {
  if (!isOpen) return null;

  // 🔥 삭제 실행 함수
  const handleDeleteConfirm = async () => {
    if (!deletePassword) return alert("비밀번호를 입력해주세요.");

    try {
      const q = query(
        collection(db, "messages"),
        where("password", "==", deletePassword)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        await deleteDoc(doc(db, "messages", deleteId));
        alert("메시지가 삭제되었습니다!");
        onClose();
      } else {
        alert("비밀번호가 틀렸습니다!");
      }
    } catch (error) {
      console.error("메시지 삭제 실패:", error);
      alert("메시지 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-xl font-bold text-center">🔒 메시지 삭제</h3>
        <input
          type="password"
          className="w-full p-3 mt-4 rounded bg-gray-700 text-center"
          placeholder="비밀번호 입력"
          maxLength={6}
          value={deletePassword}
          onChange={(e) => setDeletePassword(e.target.value)}
        />
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="text-gray-400">
            ❌ 닫기
          </button>
          <button onClick={handleDeleteConfirm} className="text-red-400">
            🗑 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
