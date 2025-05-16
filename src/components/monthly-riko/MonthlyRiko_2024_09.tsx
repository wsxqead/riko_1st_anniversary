import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_09() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2024년 9월호 - 힐링, 도전, 그리고 또 하나의 성장
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          그림을 그리고, 동물과 친구가 되고, 노래를 부르고. 소중한 순간들을
          조심스럽게 쌓아간 한 달.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#A6D0A6] mb-4">📋 Contents</h2>
        <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>01. 🌿 리코와 함께한 힐링의 시간</li>
          <li>02. 🎲 함께하는 도전과 소통</li>
          <li>03. 🎵 음악과 목소리로 전한 마음</li>
          <li>04. ✨ 새로운 무대, 새로운 도약</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />

      <Section title="🌿 리코와 함께한 힐링의 시간" items={part1} />
      <Divider />

      <Section title="🎲 함께하는 도전과 소통" items={part2} />
      <Divider />

      <Section title="🎵 음악과 목소리로 전한 마음" items={part3} />
      <Divider />

      <Section title="✨ 새로운 무대, 새로운 도약" items={part4} />
      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🖼️ 9월의 갤러리
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={item.image}
                alt={item.caption}
                width={600}
                height={400}
                className="rounded-lg group-hover:brightness-75 transition"
              />
              <p className="absolute bottom-2 left-2 right-2 text-center text-sm text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <Divider />

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
          &quot;따뜻한 숨을 들이마시고, 다시 한 걸음 내디딘 시간이었어요.&quot;
        </blockquote>
        <p className="text-sm text-gray-500">✨ 힐링과 성장의 9월</p>
      </motion.div>
      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-2xl font-bold text-[#A6D0A6]">💬 마무리 인사</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          조용히 웃고, 소중한 하루를 쌓아간 9월. 이제 또 다른 계절을 향해, 함께
          걸어가요.
        </p>
      </motion.div>
    </div>
  );
}

const part1 = [
  {
    title: "파스파투2 그림 방송",
    description:
      "리코가 화가가 되어 펼친 창작 도전! 팬들과 함께 그림을 완성하는 따뜻한 시간.",
    image: "/images/monthly/sep_passpartout.png",
  },
  {
    title: "욘사왔도 동물의 숲 이주기",
    description:
      "동물 친구들과 함께한 힐링 모험, 하루하루 평화롭게 쌓아간 소중한 이야기.",
    image: "/images/monthly/sep_animalcrossing.png",
  },
];

const part2 = [
  {
    title: "3기생 클리셰 합방 - 마리오 파티 슈퍼스타즈",
    description: "클리셰 멤버들과 웃고 떠들며 즐긴 유쾌한 대전!",
    image: "/images/monthly/sep_marioparty.png",
  },
  {
    title: "배틀그라운드 좀비모드 (w. 강지, 히나, 리제)",
    description:
      "좀비에 맞서며 치킨까지 성공! 동료들과 함께한 짜릿한 승리의 순간.",
    image: "/images/monthly/sep_zombiemode.png",
  },
  {
    title: "스텔라이브 팬게임",
    description: "3D 수박게임을 스텔라이브 맴버로!.",
    image: "/images/monthly/sep_fangame.png",
  },
];

const part3 = [
  {
    title: "4th 커버곡 '맑은 날' 발표",
    description: "맑은 하늘처럼 청량한 목소리로 전한 진심 어린 선물.",
    image: "/images/monthly/sep_clear_sky0.png",
  },
  {
    title: "살육의 천사 풀더빙 도전",
    description: "새로운 감정에 도전한 리코의 진지한 풀더빙 시도.",
    image: "/images/monthly/sep_angelslaying.png",
  },
  {
    title: "9월 노래방송",
    description: "가을밤을 가득 채운 따뜻한 멜로디와 팬들과의 소중한 교감.",
    image: "/images/monthly/sep_karaoke.png",
  },
];

const part4 = [
  {
    title: "작혼 광고 - 산리오 콜라보",
    description: "귀여운 세계에서 빛난 리코의 에너지! 공식 콜라보 모델로 활동.",
    image: "/images/monthly/sep_mahjong_sanrio.png",
  },
  {
    title: "MCN 대전 시즌2 참가 - 체인드 투게더",
    description: "3기생 멤버들과 함께 협력하며 펼친 특별한 경기!",
    image: "/images/monthly/sep_mcn_event.png",
  },
  {
    title: "방과후 스텔부 명조 광고",
    description: "스텔라이브 세계를 넓혀간 공식 홍보 활동.",
    image: "/images/monthly/sep_afterclass.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/sep_passpartout2.png",
    caption: "파스파투2 그림 방송",
  },
  {
    image: "/images/monthly/sep_animalcrossing2.png",
    caption: "욘사왔도 동물의 숲 이주기",
  },
  {
    image: "/images/monthly/sep_clear_sky.png",
    caption: "'맑은 날' 커버곡 썸네일",
  },
  {
    image: "/images/monthly/sep_mcn_event2.png",
    caption: "MCN 대전 시즌2 체인드 투게더 경기",
  },
];

function Section({
  title,
  items,
}: {
  title: string;
  items: { title: string; image: string; description: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <h2 className="text-3xl font-bold text-center text-[#A6D0A6] mb-10">
        {title}
      </h2>

      {items.map((item, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              isEven ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
