import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_10() {
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
          📖 2024년 10월호 - 목소리와 마음을 맞추며
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          노래하고, 퍼즐을 풀고, 어둠을 지나, 다시 한 번 빛나는 순간을 맞이한
          10월
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
          <li>01. 🎵 목소리와 마음을 맞춰</li>
          <li>02. 🌑 어둠을 걷는 작은 모험</li>
          <li>03. 📚 리코가 열어간 이야기</li>
          <li>04. 🌟 또 한 번의 성장</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* 각 Part Section */}
      <Section title="🎵 목소리와 마음을 맞춰" items={part1} />
      <Divider />
      <Section title="🌑 어둠을 걷는 작은 모험" items={part2} />
      <Divider />
      <Section title="📚 리코가 열어간 이야기" items={part3} />
      <Divider />
      <Section title="🌟 또 한 번의 성장" items={part4} />
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
          🖼️ 10월의 갤러리
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
          &quot;조심스럽지만 단단해진 한 걸음이었어요.&quot;
        </blockquote>
        <p className="text-sm text-gray-500">✨ 도전과 성장의 10월</p>
      </motion.div>
      <Divider />
      {/* 💬 Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-2xl font-bold text-[#A6D0A6]">💬 마무리 인사</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          작은 도전이 쌓여, 작은 성장으로 이어진 10월. 다시 한 번, 함께 앞으로
          나아갈 준비가 되었어요.
        </p>
      </motion.div>
    </div>
  );
}

/* ✨ Part별 데이터 */

const part1 = [
  {
    title: "5th 커버곡 'GETCHA!' 발표",
    description:
      "리코와 린이 함께 부른 첫 듀엣 커버곡, 서로 다른 매력을 하나로.",
  },
  {
    title: "협동게임 'We Were Here Too' 플레이",
    description: "린과 퍼즐을 풀며 협력한 탈출 게임 도전! 마음을 맞춘 모험.",
  },
];

const part2 = [
  {
    title: "리틀 나이트메어 1 & 2 플레이",
    description: "어두운 꿈속 세계를 조심스럽게 탐험한 리코의 작은 모험.",
  },
  {
    title: "좀보이드 체험",
    description: "재난 속 생존을 향한 아슬아슬한 도전! 웃음과 긴장의 시간.",
  },
  {
    title: "아오오니 & 파피 플레이 타임 2",
    description:
      "공포와 웃음이 공존했던 특별한 체험. 무서워도 포기하지 않는 리코!",
  },
];

const part3 = [
  {
    title: "필기체 도서관 주최",
    description:
      "리코가 직접 기획한 팬 참여 컨텐츠! 따뜻한 글씨로 소통한 시간.",
  },
  {
    title: "오목 대회 참가",
    description: "진지함과 웃음이 함께한 스텔라이브 오목 대회!",
  },
];

const part4 = [
  {
    title: "6th 커버곡 '톤데모 원더즈' 발표",
    description: "활기차고 다채로운 보컬 매력, 리코의 새로운 도전.",
  },
  {
    title: "GTA 스토리 모드 플레이",
    description:
      "처음으로 도전한 스토리형 오픈월드 게임! 엉뚱하고 유쾌한 모험.",
  },
  {
    title: "3기생 클리셰 합방 - 슈퍼 마리오 파티 잼버리",
    description: "멤버들과 함께한 끈끈한 우정과 웃음 가득한 하루.",
  },
];

/* ✨ 갤러리 데이터 */
const gallery = [
  {
    image: "/images/oct_getcha_cover.jpg",
    caption: "5th 커버곡 'GETCHA!' 썸네일",
  },
  {
    image: "/images/oct_wewerehere.jpg",
    caption: "린과 'We Were Here Too' 협력 플레이",
  },
  {
    image: "/images/oct_clear_day.jpg",
    caption: "6th 커버곡 '톤데모 원더즈' 썸네일",
  },
  {
    image: "/images/oct_marioparty.jpg",
    caption: "3기생 합방 '슈퍼 마리오 파티 잼버리'",
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
