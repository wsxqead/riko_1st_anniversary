import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2025_04() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      {/* Cover */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2025년 4월호 - 함께 웃고, 함께 노래한 시간
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          리코의 첫 번째 생일, 새로운 만남, 특별한 승부. 봄과 함께 시작된 리코의
          4월 이야기를 담았습니다.
        </p>
      </motion.div>

      {/* Contents */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#A6D0A6] mb-4">📋 Contents</h2>
        <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>01. 🌟 새로운 이야기의 시작</li>
          <li>02. 🎂 첫 번째 생일, 첫 번째 약속</li>
          <li>03. 🎮 함께한 승부의 순간들</li>
          <li>04. 🎵 서로를 닮아가는 노래</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* Sections */}
      <Section title="🌟 새로운 이야기의 시작" items={part1} />
      <Divider />
      <Section title="🎂 첫 번째 생일, 첫 번째 약속" items={part2} />
      <Divider />
      <Section title="🤝 협력과 도전의 시간" items={part3} />
      <Divider />
      <Section title="🎵 서로를 닮아가는 노래" items={part4} />
      <Divider />
      {/* Gallery */}
      <GallerySection />
      <Divider />
      {/* Special Feature */}
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
        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <p className="italic">Q. 첫 생일을 팬들과 함께한 소감은?</p>
          <p>
            &quot;처음 맞이한 생일, 상상했던 것보다 훨씬 더 따뜻하고 벅찼어요.
            정말 꿈같았어요.&quot;
          </p>
          <p className="italic">Q. 가장 기억에 남는 순간은요?</p>
          <p>
            &quot;생일 방송 중 치코들에게 쓴 편지를 읽을 때, 저도 모르게 눈물이
            났어요. 그 순간은 평생 잊지 못할 거예요.&quot;
          </p>
        </div>
      </motion.div>
      <Divider />
      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-2xl font-bold text-[#A6D0A6]">💬 마무리 인사</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          4월은 리코에게 첫 생일과 새로운 만남, 그리고 웃음이 가득한 승부의
          순간들이 함께한 시간들이었습니다. 여러분이 있었기에 모든 순간이
          빛났어요. 앞으로도 함께 걸어가요. 고마워요.
        </p>
      </motion.div>
    </div>
  );
}

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

function GallerySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
        🖼️ 4월의 갤러리
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
  );
}

const part1 = [
  {
    title: "만우절 스틸라이브 NEWS 진행",
    description:
      "4월 1일, 시부키・나나와 함께 뉴스 형식으로 구성된 만우절 콘텐츠! 진지한 듯 장난스러운, 웃음 가득했던 하루.",
    image: "/images/monthly/apr_news.png",
  },
  {
    title: "게임 '인조이' 막장 루트 체험",
    description:
      "같은 날, 독특한 세계관의 게임 '인조이'에서 다양한 루트를 체험하며 팬들에게 큰 웃음을 안겼습니다.",
    image: "/images/monthly/apr_enjoygame.png",
  },
  {
    title: "스플릿 픽션 합방 (with 타비)",
    description:
      "13시간 마라톤 플레이! 타비와 함께 몰입도 높은 플레이와 티키타카 케미로 팬들의 열광을 이끌었습니다.",
    image: "/images/monthly/apr_splitfiction.png",
  },
];

const part2 = [
  {
    title: "생일 기념 방송 – 본편 컨텐츠",
    description:
      "4월 13일, 리코의 첫 번째 생일을 맞아 팬들과 함께한 본방송. 생일 축하 메시지, 굿즈 추첨, 손편지 공개 등 다양한 이벤트로 감동과 웃음을 나눈 시간이었습니다.",
    image: "/images/monthly/apr_birthday_main.png",
  },
  {
    title: "'증표' 커버곡 공개",
    description:
      "방송중, 리코는 자신의 진심을 담은 커버곡 '증표'를 발표하며 팬들에게 감사의 마음을 전했습니다. 눈물과 감동이 함께했던 생일의 대미.",
    image: "/images/monthly/apr_token_cover.png",
  },
  {
    title: "리코랜드 체험 – 팬이 제작한 생일 맵",
    description:
      "같은 날, 팬이 직접 제작한 '리코랜드' 마인크래프트 맵을 체험하며 특별한 시간을 보냈습니다. 롤러코스터와 이벤트 공간 등 감동적인 팬의 정성이 가득한 공간이었습니다.",
    image: "/images/monthly/apr_rikoland.png",
  },
  {
    title: "리코의 손편지 낭독",
    description:
      "생일방송에서 리코는 직접 쓴 손편지를 팬들에게 낭독하며 깊은 감정을 전했습니다. 따뜻하고 진심 어린 말들로 가득했던 이 장면은 팬들의 마음에 오래도록 남았습니다.",
    image: "/images/monthly/apr_letter_reading.png",
  },
];

const part3 = [
  {
    title: "발로란트 내전",
    description:
      "치열하면서도 유쾌했던 발로란트 내전. 팀워크와 반응 속도에서 리코의 반전 활약이 빛났습니다.",
    image: "/images/monthly/apr_valorant.png",
  },
  {
    title: "젠레스 존 제로 광고 합방 (with 연비니)",
    description:
      "빠른 운빨과 센스로 웃음을 준 젠레스 존 제로 광고방송. 연비니와의 호흡도 완벽!",
    image: "/images/monthly/apr_zzz_ad.png",
  },
  {
    title: "듀엣모험 2탄: 린과 협력 플레이",
    description:
      "4월 29일, 린을 초대한 듀엣모험 2탄에서는 호흡 척척 맞는 협력 플레이로 '리코린' 케미가 대폭발했습니다.",
    image: "/images/monthly/apr_duet_rin.png",
  },
];

const part4 = [
  {
    title: "시부키와의 듀엣 커버 '있잖아 있잖아 있잖아'",
    description:
      "4월 26일, 시부키와 함께한 따뜻하고 서정적인 듀엣 커버. 두 사람의 감성이 자연스럽게 어우러진 명곡.",
    image: "/images/monthly/apr_duetcover.png",
  },
];

const gallery = [
  { image: "/images/monthly/apr_news2.png", caption: "만우절 스틸라이브 NEWS" },
  {
    image: "/images/monthly/apr_birthday2.png",
    caption: "첫 번째 생일 기념 방송",
  },
  {
    image: "/images/monthly/apr_zzz_ad2.png",
    caption: "젠레스 존 제로 광고 합방",
  },
  { image: "/images/monthly/apr_valorant2.png", caption: "발로란트 내전" },
  {
    image: "/images/monthly/apr_duetcover2.png",
    caption: "있잖아 있잖아 있잖아 듀엣 커버",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
