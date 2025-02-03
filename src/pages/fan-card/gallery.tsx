import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";

export default function TestFirestore() {
  const [fanCards, setFanCards] = useState<DocumentData[]>([]); // ✅ 타입 명시

  useEffect(() => {
    const fetchFanCards = async () => {
      const querySnapshot = await getDocs(collection(db, "fanCards"));
      setFanCards(querySnapshot.docs.map((doc) => doc.data())); // ✅ 올바른 데이터 타입 설정
    };

    fetchFanCards();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🔍 Firestore 테스트</h1>
      <p className="mb-6 text-lg">Firestore에서 가져온 팬 회원증 데이터:</p>
      <ul className="w-full max-w-lg space-y-4">
        {fanCards.length === 0 ? (
          <p className="text-center text-gray-400">데이터 없음</p>
        ) : (
          fanCards.map((card, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            >
              <p className="text-lg">닉네임: {card.nickname}</p>
              <p className="text-sm text-gray-300">
                회원번호: {card.cardNumber}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
