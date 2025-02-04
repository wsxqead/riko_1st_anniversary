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
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        📜 팬 회원증 상세 보기
      </h1>
      <div className="w-full max-w-[38rem] h-auto md:h-[20rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start relative border border-gray-300">
        {/* 닫기 버튼 */}
        <button
          onClick={() => router.push("/fan-card/gallery")}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-gray-400 transition"
        >
          ✕
        </button>

        {/* 프로필 이미지 */}
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mt-4 md:absolute md:left-8 md:top-1/3 md:transform md:-translate-y-1/3">
          <Image
            src={`/images/${fanCard.image || "riko_001.png"}`}
            alt="회원증 이미지"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        {/* 닉네임 & 회원번호 */}
        <div className="mt-4 text-center md:absolute md:bottom-6 md:left-8 md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            닉네임: {fanCard.nickname}
          </h3>
          <p className="text-lg md:text-xl font-bold text-gray-900 mt-1">
            회원코드: {id}
          </p>
        </div>

        {/* QR 코드 */}
        <div className="mt-4 md:absolute md:bottom-14 md:right-10 bg-white p-2 rounded-lg shadow-lg">
          <QRCodeCanvas
            value={`https://riko-1st-anniversary.vercel.app/fan-card/${id}`}
            size={110}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        {/* Riko Anniversary */}
        <p className="mt-3 md:absolute md:bottom-6 md:right-10 text-xs text-gray-700">
          © 2025 Riko Anniversary
        </p>
      </div>
    </div>
  );
}
