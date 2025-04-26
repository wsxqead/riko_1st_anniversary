import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRikoMay() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      {/* 📖 Cover Section */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#A6D0A6]">
          📖 2024년 5월호 - 빛나는 시작, 유즈하 리코
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          2024년 5월, 한 명의 용사가 세상에 발을 디뎠습니다. 리코의 데뷔와 첫
          커버곡, 그리고 시작의 순간을 함께한 팬들과의 소중한 추억을 담았습니다.
        </p>
        <div className="flex justify-center mt-6">
          <Image
            src="/images/monthly/magazine_2024_05.png"
            alt="5월호 표지"
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
      {/* 📋 Contents Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#A6D0A6] mb-4">📋 Contents</h2>
        <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>01. 🎬 This Month&apos;s Highlights</li>
          <li>02. 🌟 Riko’s Favorite Moments</li>
          <li>03. 🖼️ Gallery</li>
          <li>04. 📰 Special Interview</li>
          <li>05. 💬 Closing Message</li>
        </ul>
      </motion.div>

      {/* 🎬 Highlights Section */}
      <div className="space-y-16">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-2xl font-bold text-[#A6D0A6]">
                {item.title}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Favorite Moments Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🌟 리코의 순간들
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
          {favoriteMoments.map((moment, idx) => (
            <li key={idx}>{moment}</li>
          ))}
        </ul>
      </motion.div>

      {/* 🖼️ Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🖼️ 5월의 갤러리
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <Image
                src={item.image}
                alt={item.caption}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 📰 Special Feature Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          📰 Special Interview
        </h2>
        <blockquote className="text-lg italic text-center text-gray-700 dark:text-gray-300">
          처음엔 정말 많이 떨렸어요. 하지만 팬분들이 따뜻하게 맞아주셔서 금방
          힘을 얻었어요. 앞으로는 더 많은 걸 보여드리고 싶어요. 제 모험을 함께
          해주실 거죠?
        </blockquote>
        <p className="text-center text-sm text-gray-500">
          ✨ 용사로서의 첫걸음을 내디딘 유즈하 리코. 앞으로 펼쳐질 무수한
          이야기의 시작이 이 5월에 있었다.
        </p>
      </motion.div>

      {/* 💬 Closing Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-2xl font-bold text-[#A6D0A6]">💬 마무리 인사</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          2024년 5월, 작은 한 발자국이 미래의 큰 여정이 되었습니다. 리코와 함께
          첫 모험을 시작해주셔서 감사합니다. 앞으로도 함께 만들어갈 이야기,
          기대해주세요!
        </p>
      </motion.div>
    </div>
  );
}

/** ✨ 하이라이트 데이터 */
const highlights = [
  {
    date: "2024.05.17",
    title: "첫 커버곡 '용사' 공개",
    description:
      "모험을 떠나는 용사처럼, 새로운 세계에 뛰어든 리코의 시작을 알린 첫 커버곡.",
    image: "/images/may1.jpg",
  },
  {
    date: "2024.05.19",
    title: "데뷔 방송, 클리셰 소속 데뷔!",
    description:
      "드디어 스텔라이브 3기생으로 공식 데뷔. 떨리는 목소리로 팬들과 첫 인사를 나눈 순간.",
    image: "/images/may_debut_stream.jpg",
  },
  {
    date: "2024.05.19",
    title: "클리셰 멤버들과 합동 방송",
    description: "따뜻한 웃음과 함께, 치코가 처음 등장한 기념비적인 합동 방송!",
    image: "/images/may_cliche_collab.jpg",
  },
  {
    date: "2024.05.23",
    title: "첫 정식 노래방송",
    description:
      "다양한 곡을 소화하며 팬들과 노래로 소통한 리코의 첫 노래방송.",
    image: "/images/may_songstream.jpg",
  },
  {
    date: "2024.05.25",
    title: "첫 싱크룸 합방",
    description:
      "클리셰 멤버들과의 첫 싱크룸 합방, 웃음과 감동이 가득했던 시간.",
    image: "/images/may_syncroom.jpg",
  },
  {
    date: "2024.05.28",
    title: "텐코 시부키와 51가지 게임 합방",
    description:
      "진지하면서도 허당끼 가득했던 리코와 시부키의 유쾌한 협동 플레이!",
    image: "/images/may_51games.jpg",
  },
  {
    date: "2024.05.29",
    title: "텐코 시부키와 공포게임 합방",
    description: "겁 많은 리코와 듬직한 시부키가 함께한 공포게임 명장면!",
    image: "/images/may_horrorgame.jpg",
  },
];

/** ✨ 리코의 순간들 데이터 */
const favoriteMoments = [
  "✨ 첫 팬들의 응원 메시지: 채팅창 가득 데뷔 축하!",
  "🎤 첫 노래방송 도전: 어설프지만 열정 가득한 무대",
  "🐹 치코 이야기 시작: 리코의 공식 마스코트 탄생!",
];

/** ✨ 갤러리 데이터 */
const gallery = [
  {
    image: "/images/may1.jpg",
    caption: "📸 데뷔 기념 합동 방송",
  },
  {
    image: "/images/may2.jpg",
    caption: "🎤 '용사' 커버곡 발표 장면",
  },
];
