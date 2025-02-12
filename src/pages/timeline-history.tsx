import { timelineData } from "@/data/timelineData";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function TimelineHistory() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-16 text-blue-400 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ✨ 유즈하 리코의 타임라인 ✨
      </motion.h1>

      <div className="relative w-full max-w-4xl">
        {timelineData.map((yearData) => (
          <motion.div
            key={yearData.year}
            className="w-full relative mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} // 🚀 애니메이션 속도 향상
            viewport={{ once: true }} // 🚀 뷰포트 감지 최적화
          >
            {/* 연도 제목 */}
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-blue-500 pb-3 mb-20 text-center relative z-10">
              {yearData.year}년
            </h2>

            {/* 📌 타임라인 중앙 줄 (PC에서만 보임) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10 h-full w-1 bg-gray-700"></div>

            <div className="space-y-16 md:space-y-32 relative">
              {yearData.events.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:justify-between gap-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3, // 🚀 애니메이션 속도 단축
                    ease: "easeOut",
                    delay: index * 0.05, // 🚀 빠른 연속성 유지
                  }}
                  viewport={{ amount: 0.2, once: true }} // 🚀 뷰포트 감지 최적화
                >
                  {/*  타임라인 아이콘 (PC에서만 보이도록) */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gray-900"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  ></motion.div>

                  {/*  타임라인 이벤트 카드 (PC에서는 교차 배치) */}
                  <motion.div
                    className={`w-full md:w-[45%] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white text-center md:text-left 
                    ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} 
                    ${event.color}`}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 10px rgba(255,255,255,0.2)", // 🚀 애니메이션 과도한 효과 제거
                    }}
                  >
                    <div className="flex flex-col items-center md:items-start space-y-2">
                      <motion.span
                        className="text-3xl md:text-4xl"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }} // 🚀 아이콘 흔들림 속도 조정
                      >
                        {event.icon}
                      </motion.span>
                      <p className="text-base md:text-lg font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-4">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mt-3 keep-all">
                      {event.description}
                    </p>
                  </motion.div>

                  {/*  타임라인 이미지 (짝수는 오른쪽, 홀수는 왼쪽) */}
                  {event.image && (
                    <motion.div
                      className={`hidden md:flex md:w-[45%] items-center justify-center ${
                        index % 2 === 0
                          ? "md:mr-auto"
                          : "md:ml-auto md:order-first"
                      }`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }} // 🚀 애니메이션 속도 조정
                      viewport={{ amount: 0.2, once: true }}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="rounded-lg border-2 border-gray-300 shadow-lg transition-transform hover:scale-110 hover:shadow-2xl"
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
