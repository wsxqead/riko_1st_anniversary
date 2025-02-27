import { surveyMessages, SurveyAnswer } from "@/data/surveyMessages";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

// TypeScript가 `react-flip-page`를 인식하지 못하는 경우 해결
const FlipPage = dynamic(() => import("react-flip-page"), { ssr: false });

export default function SurveyMessageBook() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gray-100 dark:bg-gray-900 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-8">
        📖 팬들이 남긴 설문 메시지북
      </h1>

      {isMobile ? (
        // 📱 모바일: 리스트형 표시
        <div className="w-full max-w-2xl flex flex-col gap-6 px-4">
          {surveyMessages.map((section, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold text-blue-500">
                {section.category}
              </h2>
              <p className="text-sm text-gray-500">{section.question}</p>

              {/* 답변 리스트 */}
              <div className="mt-4 space-y-6">
                {section.answers.map((msg: SurveyAnswer, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 dark:border-gray-700 pb-4"
                  >
                    <h3 className="text-md font-semibold">{msg.author}</h3>
                    <p className="text-xs text-gray-500">{msg.date}</p>
                    <p className="mt-2 text-gray-900 dark:text-white">
                      {msg.text}
                    </p>

                    {/* 팬아트 이미지가 있을 때만 표시 */}
                    {msg.image && (
                      <Image
                        src={msg.image}
                        width={300}
                        height={200}
                        className="rounded-lg mt-4 border border-gray-400 dark:border-gray-600"
                        alt="팬아트"
                      />
                    )}

                    {/* 응원 영상이 있을 때만 표시 */}
                    {msg.video && (
                      <iframe
                        src={msg.video}
                        className="w-full h-48 mt-4 rounded-lg border border-gray-400 dark:border-gray-600"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[600px] h-[700px] flex justify-center items-center">
          <FlipPage
            className="shadow-lg border dark:border-gray-700 rounded-lg"
            orientation="horizontal"
            showHint={true}
            responsive={true}
            treshold={30} // ✅ 감도 조정
            style={{
              width: "600px",
              height: "700px",
              minWidth: "600px",
              minHeight: "700px",
            }}
          >
            {surveyMessages.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center p-10 w-[600px] h-[700px] bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border border-gray-400 dark:border-gray-700"
              >
                <h2 className="text-xl font-semibold text-blue-500">
                  {section.category}
                </h2>
                <p className="text-sm text-gray-500">{section.question}</p>

                {/* 답변 리스트 */}
                <div className="mt-6 space-y-6 w-full text-left px-6">
                  {section.answers.map((msg: SurveyAnswer, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-300 dark:border-gray-700 pb-4"
                    >
                      <h3 className="text-md font-semibold">{msg.author}</h3>
                      <p className="text-xs text-gray-500">{msg.date}</p>
                      <p className="mt-2 text-gray-900 dark:text-white">
                        {msg.text}
                      </p>

                      {/* 팬아트 이미지가 있을 때만 표시 */}
                      {msg.image && (
                        <Image
                          src={msg.image}
                          width={350}
                          height={250}
                          className="rounded-lg mt-4 border border-gray-400 dark:border-gray-600"
                          alt="팬아트"
                        />
                      )}

                      {/* 응원 영상이 있을 때만 표시 */}
                      {msg.video && (
                        <iframe
                          src={msg.video}
                          className="w-full h-48 mt-4 rounded-lg border border-gray-400 dark:border-gray-600"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </FlipPage>
        </div>
      )}
    </div>
  );
}
