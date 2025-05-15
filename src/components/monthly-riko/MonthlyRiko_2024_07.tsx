import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_07() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
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

      <Section title="🤝 리코와 동료들의 유쾌한 시간" items={part1} />
      <Divider />

      <Section title="🎵 리코의 노래와 도전의 기록" items={part2} />
      <Divider />

      <Section title="🚀 새로운 무대, 또 하나의 여정" items={part3} />
      <Divider />

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
          리코만의 스타일로 여름의 청량함을 담은 커버곡, 정말 긴장했어요. 팬분들이 들어주시고
          따뜻하게 응원해주셔서 정말 감사했어요.
        </blockquote>
        <p className="text-sm text-gray-500">
          ✨ 괴수의 꽃노래 비하인드 인터뷰
        </p>
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
          7월, 동료들과 함께 웃고, 팬들과 함께 나아가며, 처음으로 더 큰 세상에
          발을 내딛었던 시간. 앞으로도, 함께 걸어가요!
        </p>
      </motion.div>
    </div>
  );
}

const part1 = [
  {
    title: "하가네즈 멤버들과 배틀그라운드",
    description: "유니, 히나, 시부키와 함께한 가볍고 유쾌한 배틀그라운드 합방!",
    image: "/images/monthly/july_haganes_battle.png",
  },
  {
    title: "칸나&린과 체인드 투게더 협동 플레이",
    description: "몸과 마음이 하나 되어야 하는 험난한 도전 속에서 터진 웃음!",
    image: "/images/monthly/july_chainedtogether.png",
  },
  {
    title: "린과 배린이 듀오",
    description: "조금 서툴지만 따뜻한 호흡, 린과 함께한 배린이 듀오 도전기.",
    image: "/images/monthly/july_rin_duo.png",
  },
  {
    title: "사장님과 듀오 배그",
    description: "든든한 사장님과의 듀오 배틀!",
    image: "/images/monthly/july_ceo_duo.png",
  },
  {
    title: "우정 테스트 합방",
    description: "티격태격 즐거웠던 클리셰 우정 테스트!",
    image: "/images/monthly/july_cli_duo.png",
  },
];

const part2 = [
  {
    title: "무반주 노래연습 방송",
    description:
      "음정과 박자 모두 자신의 감각으로! 리코다운 따뜻한 무반주 노래방송.",
    image: "/images/monthly/july_acapella.png",
  },
  {
    title: "테트리스 팬 참여 방송",
    description: "팬들과 함께 실력을 겨루고 소통하며 웃음을 나눈 특별한 시간!",
    image: "/images/monthly/july_tetris.png",
  },
];

const part3 = [
  {
    title: "커버곡 '괴수의 꽃노래' 발표",
    description:
      "조금은 어두운 감성으로, 리코가 처음 시도한 새로운 스타일의 커버곡!",
    image: "/images/monthly/july_kaiju.png",
  },
  {
    title: "대형 스트리머 서버 '멋봉리' 입장",
    description: "더 넓은 세상으로 발걸음! 새로운 모험이 시작되다.",
    image: "/images/monthly/july_meotbongri.png",
  },
  {
    title: "용사, 멋봉리에서 F급 시민이 되다",
    description:
      "처음으로 받은 등급은 F등급 시민!? 앞으로의 파란만장한 여정을 예고하다.",
    image: "/images/monthly/july_f_citizen.png",
  },
  {
    title: "귀상어 포획! 물속 탈것 획득",
    description: "낚시터에서 귀상어를 포획하며 수중 탐험 탈것을 획득!",
    image: "/images/monthly/july_shark_mount.png",
  },
  {
    title: "이번에도 도망쳤지만... 리제 선배와 조금은 가까워진 날",
    description: "리제 선배와의 케미가 조금씩 쌓여가는 특별한 순간.",
    image: "/images/monthly/july_rize_escape.png",
  },
  {
    title: "용사, 총을 가지다!",
    description: "검보다 강한 건 총?! 전투력 업그레이드 완료!",
    image: "/images/monthly/july_gun_get.png",
  },
  {
    title: "맴버들과 힐링 낚시 타임",
    description: "분주한 탐험 속 여유를 느낀 따뜻한 낚시의 하루.",
    image: "/images/monthly/july_fishing.png",
  },
  {
    title: "용사, 첫 네더라이트 풀세트 획득!",
    description: "정말 강해졌다! 마침내 도달한 최상위 장비의 세계.",
    image: "/images/monthly/july_netherite.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/july_haganes_battle2.png",
    caption: "하가네즈 멤버들과 배틀그라운드 합방",
  },
  {
    image: "/images/monthly/july_chainedtogether2.png",
    caption: "체인드 투게더 협동 플레이",
  },
  {
    image: "/images/monthly/july_tetris2.png",
    caption: "테트리스 팬참여 방송",
  },
  {
    image: "/images/monthly/july_kaiju2.png",
    caption: "괴수의 꽃노래 커버곡 썸네일",
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
