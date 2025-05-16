import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const songs = [
  {
    title: "🎙️ 나나의 생일 축하 자작랩",
    description: "나나의 생일을 축하 하기위해 리코가 준비한 노래",
    date: "2023.11.03",
    platform: "치지직",
    videoUrl: "/audio/happy-nana.mp4",
  },
  {
    title: "🎙️ 리코의 자장가 (스페이스 ver.)",
    description: "감정선이 진하게 담긴 즉석 발라드",
    date: "2024.01.15",
    platform: "X 스페이스",
    videoUrl: "/audio/little-star.mp4",
  },
  {
    title: "🎙️ 외로워송",
    description: "러스트 털리고 난뒤 부른 노래 1",
    date: "2024.01.15",
    platform: "치지직",
    videoUrl: "/audio/lust-song1.mp4",
  },
  {
    title: "🎙️ 털렷송",
    description: "러스트 털리고 난뒤 부른 노래 2",
    date: "2024.01.15",
    platform: "치지직",
    videoUrl: "/audio/lust-song2.mp4",
  },
];

export default function OriginalSongs() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-16 transition-all">
      <SectionTitle title={t("original.title")} colorClass="text-violet-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-300 dark:border-gray-600 space-y-3"
          >
            <h2 className="text-xl font-bold text-[#a6d0a6]">{song.title}</h2>
            <p className="text-sm text-gray-500">
              {song.date} · {song.platform}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {song.description}
            </p>
            <video
              controls
              className="w-full mt-2 rounded-lg shadow"
              preload="metadata"
            >
              <source src={song.videoUrl} type="video/mp4" />
              {t(
                "original.videoNotSupported",
                "브라우저에서 비디오를 재생할 수 없습니다."
              )}
            </video>
          </motion.div>
        ))}
      </div>
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
