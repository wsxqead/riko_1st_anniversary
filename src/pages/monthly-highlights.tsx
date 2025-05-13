import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 5월호 컴포넌트 불러오기
import MonthlyRiko_2024_05 from "@/components/monthly-riko/MonthlyRiko_2024_05";
import MonthlyRiko_2024_06 from "@/components/monthly-riko/MonthlyRiko_2024_06";
import MonthlyRiko_2024_07 from "@/components/monthly-riko/MonthlyRiko_2024_07";
import MonthlyRiko_2024_08 from "@/components/monthly-riko/MonthlyRiko_2024_08";
import MonthlyRiko_2024_09 from "@/components/monthly-riko/MonthlyRiko_2024_09";
import MonthlyRiko_2024_10 from "@/components/monthly-riko/MonthlyRiko_2024_10";
import MonthlyRiko_2024_11 from "@/components/monthly-riko/MonthlyRiko_2024_11";
import MonthlyRiko_2024_12 from "@/components/monthly-riko/MonthlyRiko_2024_12";
import MonthlyRiko_2025_01 from "@/components/monthly-riko/MonthlyRiko_2025_01";
import MonthlyRiko_2025_02 from "@/components/monthly-riko/MonthlyRiko_2025_02";
import MonthlyRiko_2025_03 from "@/components/monthly-riko/MonthlyRiko_2025_03";
import MonthlyRiko_2025_04 from "@/components/monthly-riko/MonthlyRiko_2025_04";
import MonthlyRiko_2025_05 from "@/components/monthly-riko/MonthlyRiko_2025_05";
import SectionTitle from "@/components/SectionTitle";

import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function MonthlyRikoMain() {
  const { t } = useTranslation("common");
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 transition-all">
      <SectionTitle
        title={t("monthlyRiko.title")}
        description={t("monthlyRiko.description")}
        colorClass="text-green-500"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center container">
        {monthlyIssues.map((issue, index) => (
          <motion.div
            key={index}
            className="cursor-pointer flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedMonth(issue.key)}
          >
            <Image
              src={issue.cover}
              alt={t(`monthlyRiko.magazines.${issue.key}`)}
              width={250}
              height={350}
              className="rounded-md shadow-md"
            />
            <p className="mt-2 font-semibold">
              {" "}
              {t(`monthlyRiko.magazines.${issue.key}`)}
            </p>
          </motion.div>
        ))}
      </div>

      {selectedMonth && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedMonth(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-y-auto max-h-[90vh] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMonth(null)}
              className="absolute top-4 right-6 text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            >
              ✕
            </button>

            {selectedMonth === "2024_05" && <MonthlyRiko_2024_05 />}
            {selectedMonth === "2024_06" && <MonthlyRiko_2024_06 />}
            {selectedMonth === "2024_07" && <MonthlyRiko_2024_07 />}
            {selectedMonth === "2024_08" && <MonthlyRiko_2024_08 />}
            {selectedMonth === "2024_09" && <MonthlyRiko_2024_09 />}
            {selectedMonth === "2024_10" && <MonthlyRiko_2024_10 />}
            {selectedMonth === "2024_11" && <MonthlyRiko_2024_11 />}
            {selectedMonth === "2024_12" && <MonthlyRiko_2024_12 />}

            {selectedMonth === "2025_01" && <MonthlyRiko_2025_01 />}
            {selectedMonth === "2025_02" && <MonthlyRiko_2025_02 />}
            {selectedMonth === "2025_03" && <MonthlyRiko_2025_03 />}
            {selectedMonth === "2025_04" && <MonthlyRiko_2025_04 />}
            {selectedMonth === "2025_05" && <MonthlyRiko_2025_05 />}
          </div>
        </div>
      )}
    </div>
  );
}

const monthlyIssues = [
  {
    key: "2024_05",
    title: "2024년 5월호",
    cover: "/images/monthly/magazine_2024_05.png",
  },
  {
    key: "2024_06",
    title: "2024년 6월호",
    cover: "/images/monthly/magazine_2024_06.png",
  },
  {
    key: "2024_07",
    title: "2024년 7월호",
    cover: "/images/monthly/magazine_2024_07.png",
  },
  {
    key: "2024_08",
    title: "2024년 8월호",
    cover: "/images/monthly/magazine_2024_08.png",
  },
  {
    key: "2024_09",
    title: "2024년 9월호",
    cover: "/images/monthly/magazine_2024_09.png",
  },
  {
    key: "2024_10",
    title: "2024년 10월호",
    cover: "/images/monthly/magazine_2024_10.png",
  },
  {
    key: "2024_11",
    title: "2024년 11월호",
    cover: "/images/monthly/magazine_2024_11.png",
  },
  {
    key: "2024_12",
    title: "2024년 12월호",
    cover: "/images/monthly/magazine_2024_12.png",
  },
  {
    key: "2025_01",
    title: "2025년 1월호",
    cover: "/images/monthly/magazine_2025_01.png",
  },
  {
    key: "2025_02",
    title: "2025년 2월호",
    cover: "/images/monthly/magazine_2025_02.png",
  },
  {
    key: "2025_03",
    title: "2025년 3월호",
    cover: "/images/monthly/magazine_2025_03.png",
  },
  {
    key: "2025_04",
    title: "2025년 4월호",
    cover: "/images/monthly/magazine_2025_04.png",
  },
  {
    key: "2025_05",
    title: "2025년 5월호",
    cover: "/images/monthly/magazine_2025_05.png",
  },
];

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
