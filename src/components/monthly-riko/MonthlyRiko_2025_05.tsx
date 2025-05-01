import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2025_05() {
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
          📖 2025년 5월호 - 유즈하 리코 1주년, 함께한 365일
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          작은 시작에서 시작된 긴 여정, 그리고 팬들과 함께한 1년의 기록. 리코의
          데뷔 1주년을 축하합니다.
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
          <li>01. 📖 1년을 돌아보다</li>
          <li>02. 🎉 1주년을 기념하는 순간들</li>
          <li>03. 💌 팬들과 함께 만든 이야기</li>
          <li>04. 🖼️ Gallery</li>
          <li>05. 📰 Special Feature</li>
          <li>06. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />

      {/* Sections */}
      <Section title="📖 1년을 돌아보다" items={part1} />
      <Divider />

      <Section title="🎉 1주년을 기념하는 순간들" items={part2} />
      <Divider />

      <Section title="💌 팬들과 함께 만든 이야기" items={part3} />
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
          <p className="italic">
            Q. 1년을 지나 다시 시작점에 선 지금, 어떤 기분인가요?
          </p>
          <p>(내용 예정)</p>
          <p className="italic">Q. 앞으로 팬들과 함께 그리고 싶은 이야기는?</p>
          <p>(내용 예정)</p>
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
          (1주년을 맞이한 리코의 감사 인사, 나중에 작성 예정)
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
    { image: "/images/may2025_1.jpg", caption: "1년 동안 함께 걸어온 리코" },
    { image: "/images/may2025_2.jpg", caption: "1주년 기념 방송 모습" },
    { image: "/images/may2025_3.jpg", caption: "팬들과 함께한 순간들" },
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
  );
}

/* Sections Data */
const part1 = [
  {
    title: "유즈하 리코, 작은 시작에서",
    description: "(1년 타임라인 요약 예정)",
  },
];

const part2 = [
  {
    title: "1주년 기념 방송 & 커버곡",
    description: "(1주년 당일 방송, 커버곡 발표 등 주요 이벤트 기록 예정)",
  },
];

const part3 = [
  {
    title: "팬들과 함께한 시간",
    description: "(팬들의 축하 메시지, 팬아트, 기념 서포트 내용 예정)",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
