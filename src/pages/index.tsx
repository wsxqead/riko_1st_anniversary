import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const recommended = [
  {
    title: "🍀 유즈카 리호와 듀엣 모험",
    description: "특별한 게스트와 함께한 음악 방송",
    url: "https://www.youtube.com/embed/XNhzQ4McHlg",
  },
  {
    title: "🎂 드디어 생일이다!!",
    description: "리코의 첫 생일방송 – 기념 커버곡 & 감동의 리코랜드",
    url: "https://www.youtube.com/embed/516-rZtmcno",
  },
  {
    title: "👗 메이드 린과 듀엣 모험 ep02",
    description: "정말 완벽한 케미, 메이드 린과의 대모험",
    url: "https://www.youtube.com/embed/E4d_ODBie0E",
  },
  {
    title: "😈 살육의 천사 풀더빙",
    description: "이세계 최강 풀더빙 몰입력의 정점",
    url: "https://www.youtube.com/embed/Su1_hVx3mdQ",
  },
  {
    title: "💯 100일 감동의 날",
    description: "눈물과 웃음, 리코 100일을 기념한 특별 방송",
    url: "https://www.youtube.com/embed/CkoKve0z7RQ",
  },
  {
    title: "🦾 산나비 풀더빙 2편",
    description: "눈물과 땀의 목소리 연기… 진심이 느껴진다",
    url: "https://www.youtube.com/embed/z2lSdTDld6I",
  },
  {
    title: "🌭 파피 & 세계 최강 음식?!",
    description: "예상 밖의 리액션 엉뚱하지만 사랑스러운 용사",
    url: "https://www.youtube.com/embed/4A0RlQMReAA",
  },
];

export default function Home() {
  const { t } = useTranslation("common");
  const [timeLeft, setTimeLeft] = useState("");
  const [isVideo, setIsVideo] = useState(false);
  const [selected, setSelected] = useState(recommended[0]);

  useEffect(() => {
    const targetDate = new Date("2025-05-19T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft(t("home.today"));
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(t("home.countdown", { days, hours, minutes }));
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    if (!isVideo) {
      const pick = recommended[Math.floor(Math.random() * recommended.length)];
      setSelected(pick);
    }
    setIsVideo(!isVideo);
  };

  return (
    <main className="flex-1 mx-auto px-3 md:px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-green-400 dark:text-green-300 drop-shadow-lg leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {t("home.title")}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mt-4 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {timeLeft}
      </motion.p>

      {/* 🎬 일러스트 or 랜덤 추천 영상 */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 aspect-video rounded-xl overflow-hidden shadow-2xl">
        {isVideo ? (
          <iframe
            className="w-full h-full"
            src={selected.url}
            title={selected.title}
            allowFullScreen
          />
        ) : (
          <Image
            src="/images/main_image.png"
            alt="메인 일러스트"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="text-center mt-4">
        {isVideo && (
          <>
            <h3 className="text-xl font-bold mt-4">{selected.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selected.description}
            </p>
          </>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
          className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
        >
          {isVideo ? "일러스트로 돌아가기" : "🎬 랜덤 방송 보기"}
        </motion.button>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
