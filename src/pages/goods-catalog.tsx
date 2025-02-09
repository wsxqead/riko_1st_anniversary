"use client";

import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { goodsItemData } from "@/data/goodsItemData";

export default function GoodsCatalog() {
  const bookRef = useRef<React.ElementRef<typeof HTMLFlipBook>>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ 모바일 감지 (한 번만 실행)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-16">
      {/* 📌 제목 */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 drop-shadow-lg text-center">
        🎤 리코의 가상 굿즈 아카이브
      </h1>
      <p className="mb-6 text-base sm:text-lg text-gray-300 text-center">
        리코의 가상 굿즈들을 감상하세요! 💙
      </p>

      {/* 📖.ㅣ, 책 컨테이너 */}
      <div className="relative w-full max-w-[95%] sm:max-w-3xl lg:max-w-5xl border-4 border-blue-500 rounded-lg shadow-xl bg-white flex justify-center items-center p-2 sm:p-4 md:p-6">
        <HTMLFlipBook
          width={isMobile ? 350 : 550} // ✅ 모바일에서는 너비 줄이기
          height={isMobile ? 500 : 750} // ✅ 모바일에서는 높이 줄이기
          flippingTime={400}
          showCover={true}
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={900}
          className="shadow-2xl"
          ref={bookRef}
          startPage={0}
          startZIndex={0}
          autoSize={false}
          drawShadow={true}
          usePortrait={isMobile ? true : false}
          maxShadowOpacity={0}
          mobileScrollSupport={false}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={20}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
          }} // ✅ `style` 속성 추가
        >
          {goodsItemData.map((img, index) => (
            <div
              key={index}
              className="page flex justify-center items-center bg-white p-2 sm:p-4"
            >
              <Image
                src={`/images/goods/${img}`}
                alt={`굿즈 페이지 ${index + 1}`}
                width={isMobile ? 320 : 500} // 모바일 너비 최적화
                height={isMobile ? 450 : 700}
                className="rounded-lg shadow-lg object-contain w-full h-auto"
                priority={index === 0} // 첫 페이지 로딩 최적화
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          ◀ 이전 페이지
        </button>
        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          다음 페이지 ▶
        </button>
      </div>
    </div>
  );
}
