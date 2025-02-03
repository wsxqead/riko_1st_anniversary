import React from "react";

const timelineData = [
  {
    year: "2024",
    events: [
      {
        date: "5월 19일",
        title: "데뷔 방송",
        description: "스텔라이브 클리셰 소속으로 데뷔!",
      },
      {
        date: "6월 26일",
        title: "리코더 연주 방송",
        description: "독특한 리코더 연주 실력을 선보임.",
      },
      {
        date: "7월 21일",
        title: "커버곡 공개",
        description: "'괴수의 꽃노래' 커버곡 발표.",
      },
      {
        date: "8월 24일",
        title: "Our Tales 발표",
        description: "클리셰 멤버들과 함께 단체곡 발표.",
      },
    ],
  },
];

export default function TimelineHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-400 drop-shadow-lg animate-fade-in">
        ✨ 유즈하 리코의 타임라인 ✨
      </h1>
      <div className="max-w-4xl mx-auto space-y-12">
        {timelineData.map((yearData) => (
          <div key={yearData.year} className="w-full">
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-6 text-center">
              {yearData.year}년
            </h2>
            <div className="space-y-8">
              {yearData.events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80 
                    ${
                      index % 2 === 0
                        ? "bg-gray-800 border-l-4 border-blue-400"
                        : "bg-gray-700 border-l-4 border-purple-400"
                    }`}
                >
                  <div className="text-lg font-semibold text-blue-300 bg-gray-900 px-4 py-2 rounded-lg shadow-md">
                    {event.date}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-white drop-shadow-md">
                      {event.title}
                    </p>
                    <p className="text-gray-300 text-lg italic">
                      {event.description}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
