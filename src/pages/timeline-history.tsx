import React from "react";

const timelineData = [
  {
    year: "2024",
    events: [
      {
        date: "5월 17일",
        title: "첫 커버곡 발표",
        description: "커버곡 '용사' 공개.",
        icon: "🎤",
        color: "bg-purple-600",
      },
      {
        date: "5월 19일",
        title: "데뷔 방송",
        description: "스텔라이브 클리셰 소속으로 데뷔!",
        icon: "🚀",
        color: "bg-blue-500",
      },
      {
        date: "5월 23일",
        title: "첫 정규 노래방송",
        description: "첫 정식 노래방송 진행.",
        icon: "🎶",
        color: "bg-indigo-500",
      },
      {
        date: "5월 28일",
        title: "텐코 시부키와 합방",
        description: "'51가지 게임' 협동 플레이.",
        icon: "🎮",
        color: "bg-green-500",
      },
      {
        date: "6월 2일",
        title: "클리셰 합방",
        description: "'Content Warning' 협동 플레이.",
        icon: "🤝",
        color: "bg-yellow-500",
      },
      {
        date: "6월 16일",
        title: "린의 메이드 카페 합방",
        description: "'주문, 받겠습니다' 컨셉 합방.",
        icon: "☕",
        color: "bg-pink-500",
      },
      {
        date: "6월 22일",
        title: "스텔라이브 마크서버 입장",
        description: "마인크래프트 스텔라이브 서버 합류.",
        icon: "⛏️",
        color: "bg-gray-500",
      },
      {
        date: "6월 26일",
        title: "리코더 연주 방송",
        description: "독특한 리코더 연주 실력을 선보임.",
        icon: "🎼",
        color: "bg-orange-500",
      },
      {
        date: "6월 28일",
        title: "나나와 협동 게임",
        description: "'오퍼레이션: 탱고' 협력 플레이.",
        icon: "🎭",
        color: "bg-red-500",
      },
      {
        date: "7월 5일",
        title: "칸나 및 린과 합방",
        description: "'체인드 투게더' 협동 플레이.",
        icon: "🔗",
        color: "bg-teal-500",
      },
      {
        date: "7월 13일",
        title: "클리셰 합방",
        description: "'우정 테스트' 컨텐츠 진행.",
        icon: "🤝",
        color: "bg-yellow-500",
      },
      {
        date: "7월 19일",
        title: "시청자 참여 테트리스",
        description: "테트리스 게임 시청자 참여 방송.",
        icon: "🕹️",
        color: "bg-red-500",
      },
      {
        date: "7월 21일",
        title: "커버곡 공개",
        description: "'괴수의 꽃노래' 커버곡 발표.",
        icon: "🎵",
        color: "bg-purple-500",
      },
      {
        date: "7월 21일",
        title: "마크 대형 스트리머 서버 입성",
        description: "'멋봉리' 서버 참가.",
        icon: "⛏️",
        color: "bg-gray-500",
      },
      {
        date: "8월 23일",
        title: "3rd 커버곡 발표",
        description: "'지구를 줄게' 커버곡 공개.",
        icon: "🌍",
        color: "bg-blue-500",
      },
      {
        date: "8월 23일",
        title: "텐코 시부키 방송 참여",
        description: "텐코 시부키 방송에서 클리셰 바 참여.",
        icon: "🎤",
        color: "bg-purple-500",
      },
      {
        date: "8월 24일",
        title: "Our Tales 발표",
        description: "클리셰 멤버들과 함께 단체곡 발표.",
        icon: "🎤",
        color: "bg-purple-600",
      },
      {
        date: "8월 25일",
        title: "클리셰 100일 기념 합방",
        description: "클리셰 100일 기념 합동 방송.",
        icon: "🎉",
        color: "bg-blue-500",
      },
      {
        date: "8월 27일",
        title: "스텔라이브 vs 픽셀네트워크",
        description: "배틀그라운드 내전 진행.",
        icon: "🎯",
        color: "bg-red-500",
      },
      {
        date: "9월 16일",
        title: "3기 클리셰 합방",
        description: "'마리오 파티 슈퍼스타즈' 플레이.",
        icon: "🎮",
        color: "bg-green-500",
      },
      {
        date: "9월 23일",
        title: "4th 커버곡 발표",
        description: "'맑은 날' 커버곡 공개.",
        icon: "☀️",
        color: "bg-orange-500",
      },
      {
        date: "9월 28일",
        title: "[MCN 대전] 시즌2 참가",
        description: "'체인드 투게더'로 3기생 클리셰 멤버들과 참가.",
        icon: "🏆",
        color: "bg-indigo-500",
      },
      {
        date: "9월 30일",
        title: "방과후 스텔부 광고",
        description: "명조 광고 진행.",
        icon: "📺",
        color: "bg-gray-500",
      },
      {
        date: "10월 4일",
        title: "5th 커버곡 발표",
        description: "'GETCHA!' (w. 아오쿠모 린) 커버곡 공개.",
        icon: "🎧",
        color: "bg-indigo-500",
      },
      {
        date: "10월 4일",
        title: "린과 협동 게임",
        description: "'We Were Here Too' 협동 플레이.",
        icon: "🎭",
        color: "bg-teal-500",
      },
      {
        date: "10월 11일",
        title: "필기체 도서관",
        description: "리코 주최 컨텐츠 진행.",
        icon: "📖",
        color: "bg-orange-500",
      },
      {
        date: "10월 13일",
        title: "오목 대회 참가",
        description: "스텔라이브 주최 오목 대회 참가.",
        icon: "⚫⚪",
        color: "bg-black",
      },
      {
        date: "10월 18일",
        title: "6th 커버곡 발표",
        description: "'톤데모 원더즈' 커버곡 공개.",
        icon: "✨",
        color: "bg-yellow-500",
      },
      {
        date: "10월 24일",
        title: "3기 클리셰 합방",
        description: "'슈퍼 마리오 파티 잼버리' 플레이.",
        icon: "🎲",
        color: "bg-red-400",
      },
      {
        date: "10월 31일",
        title: "스텔라이브 좀보이드 서버 참가",
        description: "좀보이드 서버에서 생존 도전.",
        icon: "🧟",
        color: "bg-gray-700",
      },
      {
        date: "11월 1일",
        title: "7th 커버곡 발표",
        description: "'케세라세라' 커버곡 공개.",
        icon: "🎶",
        color: "bg-indigo-500",
      },
      {
        date: "11월 16일",
        title: "GTA5 습격 플레이",
        description: "3기 클리셰 멤버들과 습격 진행.",
        icon: "🚔",
        color: "bg-gray-700",
      },
      {
        date: "11월 18일",
        title: "100인 시참 합방",
        description: "'에브리바디 원 투 스위치' 시참 방송.",
        icon: "🎮",
        color: "bg-green-500",
      },
      {
        date: "11월 21일",
        title: "8th 커버곡 발표",
        description: "'경화수월' 커버곡 공개.",
        icon: "🎵",
        color: "bg-blue-400",
      },
      {
        date: "11월 26일",
        title: "GTA 대형 스트리머 서버 참가",
        description: "'봉누도' 서버 합류.",
        icon: "🚗",
        color: "bg-red-500",
      },
      {
        date: "12월 13일",
        title: "9th 커버곡 발표",
        description: "'주름맞추기' 커버곡 공개.",
        icon: "🎼",
        color: "bg-orange-500",
      },
      {
        date: "12월 25일",
        title: "10th 커버곡 발표",
        description: "'크리스마스송' 커버곡 공개.",
        icon: "🎄",
        color: "bg-green-500",
      },
      {
        date: "12월 30일",
        title: "팰월드 스텔라이브 서버 입장",
        description: "팰월드에서 스텔라이브 서버 합류.",
        icon: "🌍",
        color: "bg-teal-500",
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        date: "1월 10일",
        title: "11th 커버곡 발표",
        description: "'꽃의 탑' 커버곡 공개.",
        icon: "🌸",
        color: "bg-purple-500",
      },
      {
        date: "1월 28일",
        title: "12th 커버곡 발표",
        description: "'절대 적대 완전 싫어' (w. 텐코 시부키) 커버곡 공개.",
        icon: "🎤",
        color: "bg-blue-500",
      },
    ],
  },
];

export default function TimelineHistory() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-16 text-blue-400 drop-shadow-lg text-center">
        ✨ 유즈하 리코의 타임라인 ✨
      </h1>

      <div className="relative w-full max-w-4xl">
        {timelineData.map((yearData) => (
          <div key={yearData.year} className="w-full relative mb-32">
            {/* 🔹 연도 제목 */}
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-blue-500 pb-3 mb-20 text-center relative z-10">
              {yearData.year}년
            </h2>

            {/* 📌 타임라인 중앙 줄 (PC에서만 보임) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-700"></div>

            <div className="space-y-32 relative">
              {yearData.events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* 🔹 타임라인 아이콘 (PC에서만 보이도록) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gray-900"></div>

                  {/* 🔹 타임라인 이벤트 카드 */}
                  <div
                    className={`w-full md:w-[45%] p-6 md:p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white 
                    md:absolute md:flex md:items-center
                    ${
                      index % 2 === 0
                        ? "md:left-0 md:text-right"
                        : "md:right-0 md:text-left"
                    } 
                    ${event.color}`}
                  >
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <span className="text-3xl md:text-4xl">{event.icon}</span>
                      <p className="text-base md:text-lg font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-4">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mt-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
