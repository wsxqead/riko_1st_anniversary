import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { monthlyRikoData } from "@/data/monthlyRikoData";

export default function MonthlyRiko() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-6 py-16 transition-all">
      {/* 🔥 헤더 */}
      <motion.div
        className="w-full py-10 bg-gradient-to-r from-[#8FBF8F] to-[#A6D0A6] rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg">
          📖 월간 리코 (2024년 5월 ~ 2025년 5월)
        </h1>
        <p className="text-lg text-gray-800 mt-2">
          리코의 한 달을 돌아보는 가상 잡지!
        </p>
      </motion.div>

      {/* 📌 표지 목록 (카드 스타일) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-10">
        {monthlyRikoData.map((issue, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => setSelectedIssue(issue.month)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Image
              src={issue.cover ?? ""}
              alt={issue.month}
              width={250}
              height={350}
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              {issue.month}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 📌 전자 잡지 팝업 */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-[90vh]">
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-4 right-6 text-gray-900 dark:text-white text-2xl font-bold hover:text-gray-500 dark:hover:text-gray-300 transition"
            >
              ✕
            </button>

            {monthlyRikoData
              .filter((issue) => issue.month === selectedIssue)
              .map((issue) => (
                <div key={issue.month} className="text-center">
                  {/* 🎇 타이틀 & 설명 */}
                  <h2 className="text-3xl font-bold text-[#A6D0A6] text-center mb-4">
                    {issue.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
                    {issue.description}
                  </p>

                  {/* 🖼️ 컨텐츠 섹션 (텍스트 + 이미지 + 영상) */}
                  <div className="mt-6 flex flex-col space-y-6">
                    {issue.contents.map((content, idx) => {
                      if (content.type === "video") {
                        return (
                          <motion.video
                            key={idx}
                            controls
                            className="w-full max-h-[450px] rounded-lg shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                          >
                            <source src={content.src ?? ""} type="video/mp4" />
                          </motion.video>
                        );
                      } else if (
                        content.type === "image" &&
                        typeof content.src === "string"
                      ) {
                        return (
                          <motion.div
                            key={idx}
                            className="flex justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                          >
                            <Image
                              src={content.src}
                              alt="잡지 이미지"
                              width={600}
                              height={400}
                              className="rounded-lg shadow-md"
                            />
                          </motion.div>
                        );
                      } else if (content.type === "text") {
                        return (
                          <motion.p
                            key={idx}
                            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                          >
                            {content.content}
                          </motion.p>
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
