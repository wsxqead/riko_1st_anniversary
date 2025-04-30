// pages/stylebook.tsx

import Image from "next/image";

const outfits = [
  {
    title: "🎀 마법소녀 복장",
    description: "마법봉과 함께한 리코의 귀여운 마법소녀 변신!",
    image: "/images/outfits/magic-girl.png",
  },
  {
    title: "🎃 할로윈 복장",
    description: "할로윈 특집 방송에서의 유쾌한 코스튬!",
    image: "/images/outfits/halloween.png",
  },
  {
    title: "👮 경찰모자",
    description: "경찰 RP에서 보여준 의외의 카리스마!",
    image: "/images/outfits/police-hat.png",
  },
  {
    title: "🎄 크리스마스 복장",
    description: "산타 모자와 함께한 따뜻한 연말 분위기!",
    image: "/images/outfits/christmas.png",
  },
  {
    title: "🟢 루이지 복장",
    description: "게임 방송 중 깜짝 등장한 루이지 코스튬!",
    image: "/images/outfits/luigi.png",
  },
  {
    title: "🎂 생일 드레스",
    description: "팬들과 함께한 생일 방송의 주인공 드레스 스타일!",
    image: "/images/outfits/birthday-dress.png",
  },
];

export default function StyleBook() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-16">
      <h1 className="text-2xl font-extrabold text-center text-blue-500 dark:text-blue-400 mb-12">
        👗 리코의 방송 속 스타일북
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-300 dark:border-gray-600"
          >
            <Image
              src={outfit.image}
              alt={outfit.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{outfit.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {outfit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
