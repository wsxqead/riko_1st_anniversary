import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_07() {
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
          📖 2024년 7월호 - 함께 웃고, 함께 성장한 여름
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          동료들과 손을 맞잡고, 노래하고, 도전하며 쌓아간 한 달의 기록
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
          <li>01. 🤝 리코와 동료들의 유쾌한 시간</li>
          <li>02. 🎵 리코의 노래와 도전의 기록</li>
          <li>03. 🚀 새로운 무대, 또 하나의 여정</li>
          <li>04. 🖼️ Gallery</li>
          <li>05. 📰 Special Feature</li>
          <li>06. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* 🤝 Part 1: 동료들과 유쾌한 시간 */}
      <Section title="🤝 리코와 동료들의 유쾌한 시간" items={part1} />
      <Divider />
      {/* 🎵 Part 2: 리코의 노래와 도전의 기록 */}
      <Section title="🎵 리코의 노래와 도전의 기록" items={part2} />
      <Divider />
      {/* 🚀 Part 3: 새로운 무대, 또 하나의 여정 */}
      <Section title="🚀 새로운 무대, 또 하나의 여정" items={part3} />
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
          🖼️ 7월의 갤러리
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
      {/* 📰 Special Feature Section */}
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
          조금은 어두운 감성을 담은 커버곡, 정말 긴장했어요. 팬분들이 들어주시고
          따뜻하게 응원해주셔서 정말 감사했어요.
        </blockquote>
        <p className="text-sm text-gray-500">
          ✨ 괴수의 꽃노래 비하인드 인터뷰
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
          7월, 동료들과 함께 웃고, 팬들과 함께 나아가며, 처음으로 더 큰 세상에
          발을 내딛었던 시간. 앞으로도, 함께 걸어가요!
        </p>
      </motion.div>
    </div>
  );
}

/* ✨ 하이라이트 데이터 */

const part1 = [
  {
    title: "하가네즈 멤버들과 배틀그라운드",
    description: "유니, 히나, 시부키와 함께한 가볍고 유쾌한 배틀그라운드 합방!",
  },
  {
    title: "칸나&린과 체인드 투게더 협동 플레이",
    description: "몸과 마음이 하나 되어야 하는 험난한 도전 속에서 터진 웃음!",
  },
  {
    title: "린과 배린이 듀오",
    description: "조금 서툴지만 따뜻한 호흡, 린과 함께한 배린이 듀오 도전기.",
  },
  {
    title: "사장님과 듀오 배그 & 우정 테스트 합방",
    description:
      "든든한 사장님과의 듀오 배틀, 그리고 티격태격 즐거웠던 클리셰 우정 테스트!",
  },
];

const part2 = [
  {
    title: "무반주 노래연습 방송",
    description:
      "음정과 박자 모두 자신의 감각으로! 리코다운 따뜻한 무반주 노래방송.",
  },
  {
    title: "테트리스 팬 참여 방송",
    description: "팬들과 함께 실력을 겨루고 소통하며 웃음을 나눈 특별한 시간!",
  },
];

const part3 = [
  {
    title: "커버곡 '괴수의 꽃노래' 발표",
    description:
      "조금은 어두운 감성으로, 리코가 처음 시도한 새로운 스타일의 커버곡!",
  },
  {
    title: "대형 스트리머 서버 '멋봉리' 입장",
    description: "더 넓은 세상으로 발걸음! 새로운 모험이 시작되다.",
  },
];

/* ✨ 갤러리 데이터 */
const gallery = [
  {
    image: "/images/july_haganes_battle.jpg",
    caption: "하가네즈 멤버들과 배틀그라운드 합방",
  },
  {
    image: "/images/july_chainedtogether.jpg",
    caption: "체인드 투게더 협동 플레이",
  },
  {
    image: "/images/july_tetris.jpg",
    caption: "테트리스 팬참여 방송",
  },
  {
    image: "/images/july_kaiju.jpg",
    caption: "괴수의 꽃노래 커버곡 썸네일",
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
