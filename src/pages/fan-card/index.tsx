import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import SectionTitle from "@/components/SectionTitle";
import i18nextConfig from "../../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function FanCardGenerator() {
  const { t } = useTranslation("common");
  const [nickname, setNickname] = useState("");
  const [selectedImage, setSelectedImage] = useState("riko_001.png");
  const [cardNumber, setCardNumber] = useState<number | null>(null);
  const [qrSize, setQrSize] = useState(100);

  useEffect(() => {
    setCardNumber(Math.floor(100000 + Math.random() * 900000));
    if (typeof window !== "undefined") {
      setQrSize(window.innerWidth < 768 ? 80 : 100);
    }
  }, []);

  const qrValue = `https://riko-1st-anniversary.vercel.app/fan-card/${cardNumber}`;

  const saveFanCard = async () => {
    if (!nickname) return alert(t("fanCard.alertNoNickname"));

    try {
      await addDoc(collection(db, "fanCards"), {
        nickname,
        cardNumber,
        image: selectedImage,
        createdAt: new Date(),
      });
      alert(t("fanCard.alertSaved"));
    } catch (error) {
      console.error(t("fanCard.errorSaving"), error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 px-4 transition-all">
      <SectionTitle
        title={t("fanCard.title")}
        description={t("fanCard.description")}
        colorClass="text-purple-500"
      />

      <input
        type="text"
        placeholder={t("fanCard.inputPlaceholder")}
        className="p-3 w-full sm:w-80 rounded bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:border-[#8fbf8f] focus:ring-2 focus:ring-[#a6d0a6] outline-none transition-all text-center"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <div className="mt-6 mb-4">
        <p className="text-sm sm:text-lg mb-3 text-center">
          {t("fanCard.selectImage")}
        </p>
        <div className="grid grid-cols-3 sm:flex sm:space-x-4 gap-3">
          {[
            "riko_001.png",
            "riko_002.png",
            "riko_003.png",
            "riko_004.png",
            "riko_005.png",
          ].map((img) => (
            <div
              key={img}
              className={`cursor-pointer rounded-lg transition-transform transform ${
                selectedImage === img ? "scale-110 ring-4 ring-[#a6d0a6]" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/images/${img}`}
                alt="리코 이미지"
                width={110}
                height={110}
                className="rounded-lg shadow-md hover:shadow-xl transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {cardNumber !== null && (
        <div className="relative w-full max-w-2xl h-64 md:h-80 bg-gradient-to-r from-[#a6d0a6] to-[#8fbf8f] rounded-3xl shadow-2xl p-6 mt-6 flex items-center border border-gray-300 hover:shadow-green-500 hover:shadow-md transition-all overflow-hidden">
          <div className="absolute left-6 top-1/3 transform -translate-y-1/3 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={`/images/${selectedImage}`}
              alt="회원증 이미지"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="object-cover"
            />
          </div>
          <div className="absolute left-6 bottom-8 text-left">
            <h3 className="text-sm md:text-lg font-bold text-gray-900">
              {t("fanCard.nicknameLabel")}:{" "}
              {nickname || t("fanCard.nicknameLabel")}
            </h3>
            <p className="text-sm md:text-lg font-bold text-gray-900 mt-1">
              {t("fanCard.cardNumberLabel")}: {cardNumber}
            </p>
          </div>

          <p className="absolute top-8 right-6 text-gray-900 text-xs md:text-sm font-semibold text-right">
            <Image
              src="/images/main_logo_w.png"
              alt="메인 로고"
              width={130}
              height={80}
            />
          </p>

          <div className="absolute right-6 top-1/4 transform translate-y-1/3 bg-white p-2 md:p-3 rounded-lg shadow-lg">
            <QRCodeCanvas
              value={qrValue}
              size={qrSize}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>

          <p className="absolute bottom-6 right-6 text-[10px] sm:text-xs text-gray-700 dark:text-gray-300">
            © 2025 Riko 1st Anniversary
          </p>
        </div>
      )}

      <button
        onClick={saveFanCard}
        className="mt-6 bg-gradient-to-r from-[#8fbf8f] to-[#a6d0a6] px-6 sm:px-8 py-3 rounded-xl text-gray-900 dark:text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        {t("fanCard.saveButton")}
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
