import { useEffect, useRef, useState } from "react";
import { surveyMessages, SurveyAnswer } from "@/data/surveyMessages";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SurveyMessageBook() {
  const [selectedImage, setSelectedImage] = useState<string | undefined | null>(
    null
  );
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gray-100 dark:bg-gray-900 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-12">
        📖 팬들이 남긴 설문 메시지북
      </h1>

      <div className="w-full max-w-3xl space-y-8 px-4">
        {surveyMessages.map((section, idx) => (
          <div
            key={idx}
            data-survey-index={idx} // ✅ 데이터 속성으로 idx 저장 (디버깅에도 유용!)
            ref={(el) => {
              if (el && !sectionRefs.current.includes(el)) {
                sectionRefs.current[idx] = el; // ✅ `current[idx]`에 요소 추가
              }
            }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
          >
            {/* 🔹 카테고리 제목 강조 (hover 시 3D 효과) */}
            <h2
              className="text-lg font-bold text-blue-500 flex items-center gap-2 cursor-pointer transition-transform"
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
              }
            >
              {idx % 3 === 0 ? "📌" : idx % 3 === 1 ? "💙" : "🎮"}{" "}
              {section.category}
            </h2>
            <p className="text-sm text-gray-500">{section.question}</p>

            {/* 🌟 답변 리스트 (hover 시 카드 회전) */}
            <div className="mt-4 space-y-4">
              {section.answers.map((msg: SurveyAnswer, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 cursor-pointer"
                  onMouseEnter={(e) =>
                    gsap.to(e.currentTarget, {
                      rotateY: 10,
                      scale: 1.05,
                      duration: 0.3,
                    })
                  }
                  onMouseLeave={(e) =>
                    gsap.to(e.currentTarget, {
                      rotateY: 0,
                      scale: 1,
                      duration: 0.3,
                    })
                  }
                >
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {msg.author}
                  </h3>
                  <p className="text-xs text-gray-500">{msg.date}</p>
                  <p className="mt-2 text-gray-900 dark:text-white leading-relaxed">
                    {msg.text}
                  </p>

                  {/* 🖼️ 팬아트 이미지 (슬라이드 인 애니메이션) */}
                  {msg.image && (
                    <div
                      className="mt-3 rounded-lg overflow-hidden border border-gray-400 dark:border-gray-600 shadow-md cursor-pointer"
                      onMouseEnter={(e) =>
                        gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 })
                      }
                      onMouseLeave={(e) =>
                        gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
                      }
                      onClick={() => setSelectedImage(msg.image)}
                    >
                      <Image
                        src={msg.image}
                        width={250}
                        height={180}
                        className="rounded-lg"
                        alt="팬아트"
                      />
                    </div>
                  )}

                  {/* 🎥 응원 영상 (페이드 인 애니메이션) */}
                  {msg.video && (
                    <div className="relative">
                      <iframe
                        src={msg.video}
                        className="w-full h-40 mt-4 rounded-lg border border-gray-400 dark:border-gray-600 shadow-md"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🖼️ 클릭 시 확대되는 팬아트 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
            }
          >
            <Image
              src={selectedImage}
              width={500}
              height={350}
              className="rounded-lg"
              alt="확대된 팬아트"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
