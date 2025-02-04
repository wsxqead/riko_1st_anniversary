"use client";

import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const pages = [
  "cover.png",
  "page_01.png",
  "page_02.png",
  "page_03.png",
  "page_04.png",
  "page_05.png",
  "page_06.png",
  "page_07.png",
  "page_08.png",
  "page_09.png",
  "page_10.png",
  "page_11.png",
  "page_12.png",
  "page_13.png",
  "page_14.png",
  "page_15.png",
  "page_16.png",
];

export default function GoodsCatalog() {
  const bookRef = useRef<React.ElementRef<typeof HTMLFlipBook>>(null); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg text-center">
        🎤 리코의 가상 굿즈 아카이브
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 가상 굿즈들을 감상하세요! 💙
      </p>

      {/* 📖 책 컨테이너 */}
      <div className="relative w-full max-w-5xl border-4 border-blue-500 rounded-lg shadow-xl overflow-hidden p-6 bg-white flex justify-center items-center">
        <HTMLFlipBook
          width={550}
          height={750}
          size="stretch"
          minWidth={400}
          maxWidth={1000}
          minHeight={600}
          maxHeight={900}
          showCover={true}
          startPage={0}
          flippingTime={600}
          className="shadow-2xl"
          ref={bookRef}
          drawShadow={true}
          startZIndex={0}
          usePortrait={false}
          autoSize={true}
          maxShadowOpacity={0}
          mobileScrollSupport={true}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "1000px",
            maxHeight: "900px",
          }} // ✅ `style` 속성 추가
        >
          {pages.map((img, index) => (
            <div
              key={index}
              className="page flex justify-center items-center bg-white p-4"
            >
              <Image
                src={`/images/goods/${img}`}
                alt={`굿즈 페이지 ${index + 1}`}
                width={500}
                height={700}
                className="rounded-lg shadow-lg object-contain"
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
          className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          ◀ 이전 페이지
        </button>
        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          다음 페이지 ▶
        </button>
      </div>
    </div>
  );
}
