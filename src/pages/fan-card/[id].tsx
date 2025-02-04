import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { FanCard } from "@/types/fanCard";

export default function FanCardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [fanCard, setFanCard] = useState<FanCard | null>(null);

  useEffect(() => {
    console.log("id", id);
    if (id) {
      const fetchFanCard = async () => {
        const q = query(
          collection(db, "fanCards"),
          where("cardNumber", "==", parseInt(id as string, 10)) // 🔥 숫자로 변환 후 비교
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setFanCard(querySnapshot.docs[0].data() as FanCard);
        } else {
          console.error("회원증을 찾을 수 없습니다.");
        }
      };

      fetchFanCard();
    }
  }, [id]);

  if (!fanCard)
    return <p className="text-center text-white">📌 회원증을 불러오는 중...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📜 팬 회원증 상세 보기</h1>
      <div className="w-[38rem] h-[20rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-lg p-6 flex items-center relative border border-gray-300">
        {/* 닫기 버튼 */}
        <button
          onClick={() => router.push("/fan-card-gallery")}
          className="absolute top-4 right-6 text-white text-2xl font-bold"
        >
          ✕
        </button>

        {/* 프로필 이미지 */}
        <div className="absolute left-8 top-1/3 transform -translate-y-1/3 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src={`/images/${fanCard.image || "riko_001.png"}`}
            alt="회원증 이미지"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* 닉네임 & 회원번호 */}
        <div className="absolute bottom-6 left-8 flex flex-col items-start text-left">
          <h3 className="text-xl font-bold text-gray-900">
            닉네임: {fanCard.nickname}
          </h3>
          <p className="text-xl font-bold text-gray-900 mt-2">회원코드: {id}</p>
        </div>

        {/* QR 코드 */}
        <div className="absolute bottom-14 right-10 bg-white p-3 rounded-lg shadow-lg">
          <QRCodeCanvas
            value={`https://riko-1st-anniversary.vercel.app/fan-card/${id}`}
            size={110}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        {/* Riko Anniversary */}
        <p className="absolute bottom-6 right-10 text-xs text-gray-700">
          © 2025 Riko Anniversary
        </p>
      </div>
    </div>
  );
}
