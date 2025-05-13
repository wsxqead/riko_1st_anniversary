"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { chartData } from "@/data/statsData";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function BroadcastChart() {
  const { t } = useTranslation("common");

  const labelKey = t("stats.broadcastLabel"); // e.g., "방송횟수", "Broadcasts", "配信回数"

  const formattedData = chartData.map((item) => ({
    name: t(`stats.months.${item.key}`), // 월 텍스트 번역
    [labelKey]: item.count, // 동적으로 속성명 설정
  }));

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-center text-[#4B8B4B] dark:text-[#A6D0A6] mb-4">
        {t("stats.broadcastChartTitle")}
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <defs>
            <linearGradient id="colorBroadcast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A6D0A6" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#A6D0A6" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis dataKey="name" tick={{ fill: "var(--x-color, #000)" }} />
          <YAxis tick={{ fill: "var(--x-color, #000)" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "5px",
              border: "1px solid #555",
            }}
          />
          <Bar
            dataKey={labelKey}
            fill="url(#colorBroadcast)"
            isAnimationActive={true}
            animationDuration={800}
            activeBar={{ fill: "#6FBF73" }}
          >
            <LabelList dataKey={labelKey} position="top" fill="white" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
