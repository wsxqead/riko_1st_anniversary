import { motion } from "framer-motion";
import BroadcastChart from "@/components/stats/BroadcastChart";
import GameWordCloud from "@/components/stats/GameWordCloud";
import TopClips from "@/components/stats/TopClips";
import TopSongsChart from "@/components/stats/TopSongsChart";
import RikoActivityRecords from "@/components/stats/ActivityRecords";
import LottieEffectLoader from "@/components/stats/LottieEffectLoader";

export default function RikoStats() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-6 py-16 transition-colors duration-300">
      <LottieEffectLoader />
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-16 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📊 리코의 1년간 기록된 데이터
      </motion.h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 text-center">
        리코의 활동을 숫자로 정리했습니다!
      </p>

      <div className="w-full max-w-6xl flex flex-col space-y-12">
        <BroadcastChart />

        <TopSongsChart />

        <RikoActivityRecords />

        <TopClips />

        <GameWordCloud />
      </div>
    </div>
  );
}
