import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 md:px-6 py-6">
      {/* ✨ 반짝이는 텍스트 애니메이션 효과 */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#FFD700] drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 mt-3 md:mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        리코의 1년을 함께 돌아보고, 팬들과 즐기는 공간!
      </motion.p>

      {/* 🌌 배경 + 별빛 효과 */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden mt-6 rounded-lg shadow-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-black opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* 🌠 별빛 효과 */}
        <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-repeat opacity-50 animate-[twinkle_8s_infinite]"></div>

        {/* 📸 메인 이미지 (패럴랙스 효과) */}
        <motion.div
          className="relative w-full max-w-6xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Image
            src="/images/main.png"
            alt="메인 이미지"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </motion.div>
      </div>

      {/* 🎊 축하 버튼 */}
      <div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transform transition hover:shadow-2xl"
        >
          🎊 1주년 이벤트 참여하기
        </motion.button>
      </div>
    </main>
  );
}
