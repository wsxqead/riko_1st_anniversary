import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MonthlyRiko() {
  const issuesPerPage = 7; // 한 페이지당 7개씩 표시
  const [currentPage, setCurrentPage] = useState(1);

  const issues = [
    {
      month: "2024년 5월",
      cover: "/images/monthly/magazine_2024_05.png",
      contentKey: "may2024",
    },
    {
      month: "2024년 6월",
      cover: "/images/monthly/magazine_2024_06.png",
      contentKey: "jun2024",
    },
    {
      month: "2024년 7월",
      cover: "/images/monthly/magazine_2024_07.png",
      contentKey: "jul2024",
    },
    {
      month: "2024년 8월",
      cover: "/images/monthly/magazine_2024_08.png",
      contentKey: "aug2024",
    },
    {
      month: "2024년 9월",
      cover: "/images/monthly/magazine_2024_09.png",
      contentKey: "sep2024",
    },
    {
      month: "2024년 10월",
      cover: "/images/monthly/magazine_2024_10.png",
      contentKey: "oct2024",
    },
    {
      month: "2024년 11월",
      cover: "/images/monthly/magazine_2024_11.png",
      contentKey: "nov2024",
    },
    {
      month: "2024년 12월",
      cover: "/images/monthly/magazine_2024_12.png",
      contentKey: "dec2024",
    },
    {
      month: "2025년 1월",
      cover: "/images/monthly/magazine_2025_01.png",
      contentKey: "jan2025",
    },
    {
      month: "2025년 2월",
      cover: "/images/monthly/magazine_2025_02.png",
      contentKey: "feb2025",
    },
    {
      month: "2025년 3월",
      cover: "/images/monthly/magazine_2025_03.png",
      contentKey: "mar2025",
    },
    {
      month: "2025년 4월",
      cover: "/images/monthly/magazine_2025_04.png",
      contentKey: "apr2025",
    },
    {
      month: "2025년 5월",
      cover: "/images/monthly/magazine_2025_05.png",
      contentKey: "may2025",
    },
  ];

  const bookData: Record<
    string,
    { title: string; images: string[]; videos: string[]; description: string }
  > = {
    may2024: {
      title: "📖 2024년 5월 1호",
      images: ["/images/may1.jpg", "/images/may2.jpg"],
      videos: ["https://www.youtube.com/embed/XXXXXX"],
      description: "🎉 유즈하 리코 첫 방송! VTuber로서의 첫 걸음.",
    },
    jun2024: {
      title: "📖 2024년 6월 2호",
      images: ["/images/jun1.jpg"],
      videos: ["https://www.youtube.com/embed/YYYYYY"],
      description: "🎤 첫 커버곡 발표! 팬들의 뜨거운 반응과 성장하는 채널.",
    },
    jul2024: {
      title: "📖 2024년 7월 3호",
      images: ["/images/jul1.jpg", "/images/jul2.jpg"],
      videos: ["https://www.youtube.com/embed/ZZZZZZ"],
      description: "🎮 인기 게임 스트리밍 도전! 새로운 팬들이 몰려온 순간들.",
    },
    aug2024: {
      title: "📖 2024년 8월 4호",
      images: ["/images/aug1.jpg"],
      videos: ["https://www.youtube.com/embed/WWWWWW"],
      description: "🔥 대형 스트리머 콜라보 참여! 리코의 새로운 도전.",
    },
    sep2024: {
      title: "📖 2024년 9월 5호",
      images: ["/images/sep1.jpg"],
      videos: ["https://chzzk.naver.com/embed/video/U08GUcAdMa"],
      description: "📈 구독자 수 급성장! 빠르게 성장하는 팬덤을 확인하세요.",
    },
    oct2024: {
      title: "📖 2024년 10월 6호",
      images: ["/images/oct1.jpg"],
      videos: ["https://www.youtube.com/embed/QT4S9BcQ"],
      description: "🎃 핼러윈 특별 방송! 리코의 코스프레와 무서운 게임 도전.",
    },
    nov2024: {
      title: "📖 2024년 11월 7호",
      images: ["/images/nov1.jpg", "/images/nov2.jpg"],
      videos: ["https://chzzk.naver.com/embed/video/klOJlOhNEC"],
      description: "🎶 리코의 두 번째 커버곡 발표! 팬들의 반응은?",
    },
    dec2024: {
      title: "📖 2024년 12월 8호",
      images: ["/images/dec1.jpg"],
      videos: ["https://www.youtube.com/embed/RX45DqQ"],
      description: "🎄 크리스마스 이벤트 방송! 리코와 함께한 따뜻한 연말.",
    },
    jan2025: {
      title: "📖 2025년 1월 9호",
      images: ["/images/jan1.jpg"],
      videos: ["https://www.youtube.com/embed/EK84XyQ"],
      description: "🏆 올해의 최고 방송 투표! 가장 인상적인 순간은?",
    },
    feb2025: {
      title: "📖 2025년 2월 10호",
      images: ["/images/feb1.jpg"],
      videos: ["https://chzzk.naver.com/embed/video/6FtpG7zFSQ"],
      description: "💖 팬들과의 소통 방송! 팬들이 보내준 편지와 질문에 답하기.",
    },
    mar2025: {
      title: "📖 2025년 3월 11호",
      images: ["/images/mar1.jpg"],
      videos: ["https://www.youtube.com/embed/Ux00Vb"],
      description: "🎤 1주년 기념 방송 예고! 기대되는 이벤트와 컨텐츠 공개.",
    },
    apr2025: {
      title: "📖 2025년 4월 12호",
      images: ["/images/apr1.jpg"],
      videos: ["https://www.youtube.com/embed/QZ99TqV"],
      description: "🎂 리코 생일 기념 방송! 서프라이즈 팬 이벤트 준비!",
    },
    may2025: {
      title: "📖 2025년 5월 13호",
      images: ["/images/may2025_1.jpg", "/images/may2025_2.jpg"],
      videos: ["https://www.youtube.com/embed/1YrB84"],
      description:
        "🎉 유즈하 리코 1주년 기념 방송! 감동적인 순간들을 되돌아보기.",
    },
  };

/*
📅 2024년
✅ 5월 (Vol.1) | "빛나는 시작, 유즈하 리코!"
🚀 스텔라이브 3기 데뷔! 첫 방송과 첫 커버곡 공개
📌 주요 키워드: #VTuber데뷔 #첫방송 #커버곡용사 #클리셰합방 #리코의시작

✅ 6월 (Vol.2) | "합방 러쉬! 클리셰와의 시간"
🎮 다양한 게임 합방 & 스텔라이브 마크서버 모험 시작
📌 주요 키워드: #마크서버 #공포게임합방 #배틀그라운드 #ContentWarning #텐코시부키합방

✅ 7월 (Vol.3) | "승부의 계절! 게임과 도전"
🎯 하가네즈 배틀그라운드 & 사장님과 배그 듀오
📌 주요 키워드: #하가네즈 #배린이듀오 #사장님과배그 #우정테스트 #테트리스시참

✅ 8월 (Vol.4) | "음악과 방송, 성장하는 리코"
🎵 3rd 커버곡 ‘지구를 줄게’ 발표 & 클리셰 바
📌 주요 키워드: #커버곡발표 #클리셰바 #배틀그라운드 #100일기념합방 #픽셀네트워크배그대전

✅ 9월 (Vol.5) | "새로운 도전, 새로운 무대"
🌳 용사와 동물의 숲 시작 & 좀비모드 배그
📌 주요 키워드: #동물의숲 #좀비모드배그 #마리오슈퍼스타즈 #커버곡맑은날 #MCN대전

✅ 10월 (Vol.6) | "할로윈과 음악, 특별한 달"
🎃 핼러윈 방송 & 5th 커버곡 ‘GETCHA!’ 공개
📌 주요 키워드: #할로윈특집 #커버곡GETCHA #오목대회 #필기체도서관

✅ 11월 (Vol.7) | "더 깊어진 음악과 콘텐츠"
🎶 7th 커버곡 ‘케세라세라’ 발표 & 100명의 시청자와 합방
📌 주요 키워드: #GTA습격 #100명합방 #커버곡케세라세라 #GTA대형서버참가

✅ 12월 (Vol.8) | "겨울과 함께한 리코의 변화"
🎄 크리스마스 특집 & 첫 신의상 공개
📌 주요 키워드: #크리스마스방송 #배그사녹업데이트 #신의상공개 #팰월드서버입장

📅 2025년
✅ 1월 (Vol.9) | "새해, 새로운 다짐"
🌸 11th 커버곡 ‘꽃의 탑’ 발표 & 연말결산
📌 주요 키워드: #연말결산 #새해목표 #커버곡꽃의탑

✅ 2월 (Vol.10) | "팬들과의 따뜻한 소통"
💖 팬들과의 소통 방송 & 12th 커버곡 ‘절대 적대 완전 싫어’ 발표
📌 주요 키워드: #팬이벤트 #커버곡절대적대 #소통방송

✅ 3월 (Vol.11) | "다가오는 1주년, 리코의 준비"
🏆 1주년을 앞두고 주요 이벤트와 방송 예고
📌 주요 키워드: #1주년준비 #특별방송 #팬감사

✅ 4월 (Vol.12) | "리코 생일, 팬들과 함께"
🎂 리코 생일 기념 방송 & 깜짝 이벤트
📌 주요 키워드: #생일축하 #팬서프라이즈 #특별방송

✅ 5월 (Vol.13) | "유즈하 리코, 1년의 기록"
🎉 데뷔 1주년 기념 방송! 1년 동안의 성장과 변화
📌 주요 키워드: #1주년기념 #추억정리 #팬과함께
*/

  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  // 페이지네이션 계산
  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const paginatedIssues = issues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

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
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 매월 주요 방송 하이라이트를 전자 잡지로 확인하세요! 💚
      </p>

      {/* 표지 목록 (페이지네이션 적용) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {paginatedIssues.map((issue, index) => (
          <div
            key={index}
            className="cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => setSelectedIssue(issue.contentKey)}
          >
            <Image
              src={issue.cover}
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

      {/* 페이지네이션 버튼 */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-lg font-semibold ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          ◀ 이전 페이지
        </button>
        <span className="text-lg text-gray-300">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-lg font-semibold ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#A6D0A6] hover:bg-[#8FBF8F]"
          }`}
        >
          다음 페이지 ▶
        </button>
      </div>

      {/* 전자 책자 모달 */}
      {selectedIssue && bookData[selectedIssue] && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-6">
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-gray-400 transition"
            >
              ✕
            </button>

            {/* 책자 제목 */}
            <h2 className="text-3xl font-bold text-[#A6D0A6] text-center mb-4">
              {bookData[selectedIssue].title}
            </h2>

            {/* 설명 */}
            <p className="text-gray-300 text-center">
              {bookData[selectedIssue].description}
            </p>

            {/* 이미지 표시 */}
            <div className="mt-4 flex space-x-4 overflow-x-auto">
              {bookData[selectedIssue].images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`책자 이미지 ${idx + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>

            {/* 영상 표시 */}
            <div className="mt-6">
              {bookData[selectedIssue].videos.map((video, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <iframe
                    src={video}
                    width="560"
                    height="315"
                    className="rounded-lg shadow-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
