import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_08() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      {/* 📖 Cover Section */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2024년 8월호 - 함께 만들어간 여름
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          칭호를 얻고, 노래를 부르고, 100일을 축하하며 — 조금 더 가까워진 시간
        </p>
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
          <li>01. 🧩 새로운 칭호와 끝없는 모험</li>
          <li>02. 🤝 함께한 순간들</li>
          <li>03. 🎵 음악으로 이어진 마음</li>
          <li>04. 🌟 함께 걸어온 100일</li>
          <li>05. 🎮 여름의 마지막 승부</li>
          <li>06. 🖼️ Gallery</li>
          <li>07. 📰 Special Feature</li>
          <li>08. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* 🧩 Part 1 */}
      <Section title="🧩 새로운 칭호와 끝없는 모험" items={part1} />
      <Divider />
      {/* 🤝 Part 2 */}
      <Section title="🤝 함께한 순간들" items={part2} />
      <Divider />
      {/* 🎵 Part 3 */}
      <Section title="🎵 음악으로 이어진 마음" items={part3} />
      <Divider />
      {/* 🌟 Part 4 */}
      <Section title="🌟 함께 걸어온 100일" items={part4} />
      <Divider />
      {/* 🎮 Part 5 */}
      <Section title="🎮 여름의 마지막 승부" items={part5} />
      <Divider />
      {/* 🖼️ Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🖼️ 8월의 갤러리
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
      <Divider />
      {/* 📰 Special Feature */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#A6D0A6]">
          📰 Special Feature
        </h2>
        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
          팬분들과 함께한 100일, 모든 순간을 소중히 간직하고 싶어요.
        </blockquote>
        <p className="text-sm text-gray-500">
          ✨ 100일 동안 걸어온 이야기를 돌아보며
        </p>
      </motion.div>
      <Divider />
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
          하루하루, 함께 만들어간 우리의 이야기. 8월, 새로운 약속을 품고,
          앞으로도 함께 걸어가요.
        </p>
      </motion.div>
    </div>
  );
}

/* ✨ Part별 데이터 */

const part1 = [
  {
    title: "최초으공뇽 칭호 획득",
    description:
      "멋봉리 서버에서 얻은 리코다운 칭호! 순수함과 당당함이 느껴진 순간.",
  },
  {
    title: "사이버펑크 세계 속 모험",
    description:
      "광활하고 위험한 도시를 누비며 펼쳐진 리코의 사이버펑크 도전기.",
  },
];

const part2 = [
  {
    title: "강지 & 나나와 배그 트리오",
    description: "사장님과 나나짱과 함께 웃고 도전하며 쌓은 소중한 추억.",
  },
  {
    title: "클리셰 바 첫 번째 오픈 (with 린)",
    description: "아오쿠모 린과 함께한 편안하고 따뜻했던 클리셰 바 데뷔!",
  },
  {
    title: "텐코 시부키 방송 클리셰 바 참여",
    description: "다른 멤버와 이어진 소중한 소통의 시간.",
  },
];

const part3 = [
  {
    title: "3rd 커버곡 '지구를 줄게' 발표",
    description: "맑고 투명한 리코의 목소리로 담아낸 진심 어린 약속.",
  },
  {
    title: "Our Tales 발표",
    description: "클리셰 멤버들과 함께 불러낸 하나의 이야기.",
  },
];

const part4 = [
  {
    title: "클리셰 100일 기념 합동 방송",
    description: "멤버들과 함께 웃고 축하한 100일의 시간.",
  },
  {
    title: "리코 100일 감동의 날",
    description: "팬들과 함께 울고 웃으며 나눈 리코 개인 100일의 순간.",
  },
];

const part5 = [
  {
    title: "스텔라이브 vs 픽셀네트워크 내전",
    description: "웃음과 승부가 함께한 특별한 이벤트 매치!",
  },
];

/* ✨ 갤러리 데이터 */
const gallery = [
  {
    image: "/images/aug_kaiju_title.jpg",
    caption: "3rd 커버곡 '지구를 줄게' 썸네일",
  },
  {
    image: "/images/aug_our_tales.jpg",
    caption: "클리셰 단체곡 'Our Tales' 발표",
  },
  {
    image: "/images/aug_100days.jpg",
    caption: "리코 100일 기념 방송",
  },
  {
    image: "/images/aug_battle.jpg",
    caption: "스텔라이브 vs 픽셀네트워크 내전",
  },
];

/* ✨ 공통 Part 출력용 컴포넌트 */
function Section({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">{title}</h2>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <h3 className="text-2xl font-semibold text-center md:text-left">
            {item.title}
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center md:text-left">
            {item.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
