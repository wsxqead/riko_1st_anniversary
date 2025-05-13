import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { FanCard } from "@/types/fanCard";
import SectionTitle from "@/components/SectionTitle";
import i18nextConfig from "../../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function FanCardDetail({ id }: { id: string }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [fanCard, setFanCard] = useState<FanCard | null>(null);

  useEffect(() => {
    if (id) {
      const fetchFanCard = async () => {
        const q = query(
          collection(db, "fanCards"),
          where("cardNumber", "==", parseInt(id as string, 10))
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
    return (
      <p className="text-center text-gray-800 dark:text-white mt-20">
        {t("fanCardDetail.loading")}
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 px-4 transition-all">
      <SectionTitle
        title={t("fanCardDetail.title")}
        colorClass="text-purple-500"
      />

      <div className="w-full max-w-[38rem] h-auto md:h-[20rem] bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start relative border border-gray-300 hover:shadow-green-500 transition-all">
        <button
          onClick={() => router.push("/fan-card/gallery")}
          className="absolute top-3 right-4 text-gray-900 dark:text-white text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition"
        >
          ✕
        </button>

        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mt-4 md:absolute md:left-8 md:top-1/3 md:transform md:-translate-y-1/3">
          <Image
            src={`/images/${fanCard.image || "riko_001.png"}`}
            alt="회원증 이미지"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center md:absolute md:bottom-6 md:left-8 md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
            {t("fanCardDetail.nickname")}: {fanCard.nickname}
          </h3>
          <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-1">
            {t("fanCardDetail.cardNumber")}: {id}
          </p>
        </div>

        <div className="mt-4 md:absolute md:bottom-14 md:right-10 bg-white p-2 rounded-lg shadow-lg">
          <QRCodeCanvas
            value={`https://riko-1st-anniversary.vercel.app/fan-card/${id}`}
            size={110}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        <p className="mt-3 md:absolute md:bottom-6 md:right-10 text-xs text-gray-800 dark:text-gray-200">
          © 2025 Riko Anniversary
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) {
  return {
    props: {
      id: params.id,
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
