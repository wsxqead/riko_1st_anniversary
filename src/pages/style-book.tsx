// pages/stylebook.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

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
    title: "🌸 한복 의상",
    description: "전통미와 현대미가 조화를 이룬 리코의 한복 스타일!",
    image: "/images/outfits/hanbok.png",
  },
  {
    title: "📚 사서 복장",
    description: "필기체 도서관 콘텐츠에서 선보인 진중한 사서 스타일!",
    image: "/images/outfits/librarian.png",
  },
  {
    title: "🎂 생일 드레스",
    description: "팬들과 함께한 생일 방송의 주인공 드레스 스타일!",
    image: "/images/outfits/birthday-dress.png",
  },
];

export default function StyleBook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-16 transition-all">
      <SectionTitle
        title="👗 리코의 방송 속 스타일북"
        colorClass="text-pink-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {outfits.map((outfit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600"
          >
            <div className="relative overflow-hidden h-64">
              <Image
                src={outfit.image}
                alt={outfit.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
            </div>

            <div className="p-6 relative z-10 backdrop-blur-md bg-white/80 dark:bg-gray-800/80">
              <h2 className="text-xl font-bold mb-1 text-[#a6d0a6]">
                {outfit.title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {outfit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
