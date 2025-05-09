import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FanMessageSlider from "@/components/main/FanMessageSlider";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-05-19T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("🎉 오늘이 1주년입니다! 🎉");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 남음`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 mx-auto px-3 md:px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-green-400 dark:text-green-300 drop-shadow-lg mx-auto leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mt-3 md:mt-4 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {timeLeft}
      </motion.p>

      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden mt-6 rounded-lg shadow-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-200 via-indigo-300 to-gray-200 dark:from-blue-900 dark:via-indigo-900 dark:to-black opacity-80 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl">
          {!showVideo ? (
            <Image
              src="/images/main_image.png"
              alt="메인 이미지"
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="cover"
              priority
            />
          ) : (
            <iframe
              className="w-full h-full"
              allowFullScreen
              src="https://www.youtube.com/embed/516-rZtmcno"
              title="함께 걸어온 길 – 리코 1주년 헌정영상"
            />
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-green-400 to-teal-500 dark:from-green-600 dark:to-teal-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all hover:shadow-[0_0_25px_#00ffb3]"
          onClick={() => setShowVideo(!showVideo)}
        >
          <span className="relative z-10">🎬 1주년 헌정영상 보기</span>
          <span className="absolute inset-0 bg-white opacity-10 rounded-xl blur-xl animate-pulse"></span>
        </motion.button>
      </div>

      <FanMessageSlider />
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
