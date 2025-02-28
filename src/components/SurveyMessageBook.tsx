import { surveyMessages, SurveyAnswer } from "@/data/surveyMessages";
import Image from "next/image";

export default function SurveyMessageBook() {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gray-100 dark:bg-gray-900 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-12">
        📖 팬들이 남긴 설문 메시지북
      </h1>

      <div className="w-full max-w-3xl space-y-8 px-4">
        {surveyMessages.map((section, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
          >
            {/* 🔹 카테고리 제목 강조 */}
            <h2 className="text-lg font-bold text-blue-500 flex items-center gap-2">
              {idx % 3 === 0 ? "📌" : idx % 3 === 1 ? "💙" : "🎮"}{" "}
              {section.category}
            </h2>
            <p className="text-sm text-gray-500">{section.question}</p>

            {/* 🌟 답변 리스트 */}
            <div className="mt-4 space-y-4">
              {section.answers.map((msg: SurveyAnswer, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                >
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {msg.author}
                  </h3>
                  <p className="text-xs text-gray-500">{msg.date}</p>
                  <p className="mt-2 text-gray-900 dark:text-white leading-relaxed">
                    {msg.text}
                  </p>

                  {/* 🖼️ 팬아트 이미지 */}
                  {msg.image && (
                    <Image
                      src={msg.image}
                      width={250}
                      height={180}
                      className="rounded-lg mt-3 border border-gray-400 dark:border-gray-600 shadow-md"
                      alt="팬아트"
                    />
                  )}

                  {/* 🎥 응원 영상 */}
                  {msg.video && (
                    <iframe
                      src={msg.video}
                      className="w-full h-40 mt-4 rounded-lg border border-gray-400 dark:border-gray-600 shadow-md"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
