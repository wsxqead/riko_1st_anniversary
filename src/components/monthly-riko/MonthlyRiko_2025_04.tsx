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
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#A6D0A6]">
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

      {/* Sections */}
      <Section title="🌟 새로운 이야기의 시작" items={part1} />
      <Section title="🎂 첫 번째 생일, 첫 번째 약속" items={part2} />
      <Section title="🎮 함께한 승부의 순간들" items={part3} />
      <Section title="🎵 서로를 닮아가는 노래" items={part4} />

      {/* Gallery */}
      <GallerySection />

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
            &quot;생일 방송 중 팬분들의 편지를 읽을 때, 저도 모르게 눈물이
            났어요. 그 순간은 평생 잊지 못할 거예요.&quot;
          </p>
        </div>
      </motion.div>

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

function GallerySection() {
  const gallery = [
    { image: "/images/apr_news.jpg", caption: "만우절 스틸라이브 NEWS" },
    { image: "/images/apr_birthday.jpg", caption: "첫 번째 생일 기념 방송" },
    { image: "/images/apr_zzz_ad.jpg", caption: "젠레스 존 제로 광고 합방" },
    { image: "/images/apr_valorant.jpg", caption: "발로란트 내전" },
    {
      image: "/images/apr_duetcover.jpg",
      caption: "있잖아 있잖아 있잖아 듀엣 커버",
    },
  ];

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
  );
}

/* Sections Data */
const part1 = [
  {
    title: "만우절 스틸라이브 NEWS & 인조이 모험",
    description:
      "4월 1일 만우절 기념으로 나나, 시부키와 함께 스틸라이브 NEWS를 진행하고, 새로운 게임 '인조이'에서 다양한 캐릭터와 막장 루트를 경험하며 웃음을 선사했습니다.",
  },
  {
    title: "스플릿 픽션 합방",
    description:
      "타비와 함께한 스플릿 픽션 합방에서 장장 13시간에 걸쳐 엔딩을 향해 달렸습니다. 품격있는 대화와 유쾌한 케미로 팬들에게 큰 웃음을 줬습니다.",
  },
];

const part2 = [
  {
    title: "첫 번째 생일, 그리고 '증표' 커버곡 공개",
    description:
      "4월 13일, 데뷔 후 처음 맞이한 생일을 기념하여 팬들과 특별한 시간을 보냈습니다. 생일 굿즈 추첨, 팬들의 축하영상, 그리고 감동의 '증표' 커버곡 공개까지. 눈물과 웃음이 함께했던 잊지 못할 하루였습니다.",
  },
];

const part3 = [
  {
    title: "발로란트 내전 & 젠레스 존 제로 광고 합방",
    description:
      "4월 중순, 발로란트 내전에서 뛰어난 팀플레이를 선보였고, 연비니와 함께한 젠레스 존 제로 광고 합방에서는 빠른 운빨로 승리를 거머쥐며 또 다른 매력을 보여줬습니다.",
  },
];

const part4 = [
  {
    title: "시부키와 함께한 '있잖아 있잖아 있잖아' 듀엣 커버",
    description:
      "4월 26일, 시부키와 함께한 '있잖아 있잖아 있잖아' 듀엣 커버를 공개했습니다. 서로의 감정을 자연스럽게 이어가며 따뜻한 하모니를 완성한 특별한 노래였습니다.",
  },
];
