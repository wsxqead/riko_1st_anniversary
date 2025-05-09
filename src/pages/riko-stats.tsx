import BroadcastChart from "@/components/stats/BroadcastChart";
import GameWordCloud from "@/components/stats/GameWordCloud";
import TopClips from "@/components/stats/TopClips";
import TopSongsChart from "@/components/stats/TopSongsChart";
import RikoActivityRecords from "@/components/stats/ActivityRecords";
import LottieEffectLoader from "@/components/stats/LottieEffectLoader";
import SectionTitle from "@/components/SectionTitle";

import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function RikoStats() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-6 py-16 transition-colors duration-300">
      <LottieEffectLoader />

      <SectionTitle
        title="📊 리코의 1년간 기록된 데이터"
        colorClass="text-indigo-500"
        description="리코의 활동을 숫자로 정리했습니다!"
      />

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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
