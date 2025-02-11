import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { monthlyRikoData } from "@/data/monthlyRikoData";

export default function MonthlyRiko() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  return (
    <div className="h-auto bg-gray-900 text-white flex flex-col items-center p-6 py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-16 text-[#A6D0A6] drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📖 월간 리코 (2024년 5월 ~ 2025년 5월)
      </motion.h1>

      {/* 📌 표지 목록 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {monthlyRikoData.map((issue, index) => (
          <div
            key={index}
            className="cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => setSelectedIssue(issue.month)}
          >
            <Image
              src={issue.cover ?? ""}
              alt={issue.month}
              width={250}
              height={350}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 text-lg font-semibold">
              {issue.month}
            </p>
          </div>
        ))}
      </div>

      {/* 📌 전자 잡지 팝업 */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-6">
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-gray-400 transition"
            >
              ✕
            </button>

            {monthlyRikoData
              .filter((issue) => issue.month === selectedIssue)
              .map((issue) => (
                <div key={issue.month}>
                  <h2 className="text-3xl font-bold text-[#A6D0A6] text-center mb-4">
                    {issue.title}
                  </h2>
                  <p className="text-gray-300 text-center">
                    {issue.description}
                  </p>

                  <div className="mt-4 flex flex-col space-y-4">
                    {issue.contents.map((content, idx) => {
                      if (content.type === "video") {
                        return (
                          <video
                            key={idx}
                            controls
                            className="w-full max-h-[450px] rounded-lg shadow-lg"
                          >
                            <source src={content.src ?? ""} type="video/mp4" />
                          </video>
                        );
                      } else if (
                        content.type === "image" &&
                        typeof content.src === "string"
                      ) {
                        return (
                          <Image
                            key={idx}
                            src={content.src}
                            alt="잡지 이미지"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md mx-auto"
                          />
                        );
                      } else if (content.type === "text") {
                        return (
                          <p key={idx} className="text-gray-300 text-lg">
                            {content.content}
                          </p>
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
