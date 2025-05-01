import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2025_03() {
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
          📖 2025년 3월호 - 모험과 웃음이 가득했던 한 달
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          전장의 열기, 새로운 노래, 따뜻한 동료애. 리코와 함께한 3월은 변화와
          도전으로 가득했습니다.
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
          <li>01. 🌟 새로운 도약을 향해</li>
          <li>02. 🎵 봄을 노래하다</li>
          <li>03. 🛡️ 전장의 중심에서</li>
          <li>04. 🎮 함께한 도전과 웃음</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* Sections */}
      <Section title="🌟 새로운 도약을 향해" items={part1} />
      <Divider />
      <Section title="🎵 봄을 노래하다" items={part2} />
      <Divider />
      <Section title="🛡️ 전장의 중심에서" items={part3} />
      <Divider />
      <Section title="🎮 함께한 도전과 웃음" items={part4} />
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
          <p className="italic">Q. 3월을 한 단어로 표현한다면?</p>
          <p>
            &quot;열정. 모든 순간이 모험이었고, 모든 순간이 뜨거웠어요.&quot;
          </p>
          <p className="italic">Q. 가장 기억에 남는 순간은?</p>
          <p>
            &quot;샌드박스 러스트 서버에서 콧김팀과 함께 뛰어다니던
            매일매일이요. 웃고 울고 다 함께 했던 시간들이 정말 소중했어요.&quot;
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
          열정과 웃음으로 가득했던 3월. 새로운 도전, 새로운 무대, 그리고
          변함없는 동료들과 팬 여러분. 여러분이 있었기에 이 모든 시간이
          특별했습니다. 다음 달에도, 그리고 그 이후에도, 함께 빛나는 시간을
          만들어가요.
        </p>
      </motion.div>
    </div>
  );
}

/* Section */
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

/* Gallery Section */
function GallerySection() {
  const gallery = [
    { image: "/images/mar_10k.jpg", caption: "유튜브 10만명 달성!" },
    {
      image: "/images/mar_rabbithole.jpg",
      caption: "15th 커버곡 '래빗홀' 공개",
    },
    { image: "/images/mar_ruststart.jpg", caption: "러스트 서버 콧김팀 합류" },
    { image: "/images/mar_mcn5.jpg", caption: "MCN 대전 시즌5 참가" },
    { image: "/images/mar_tank.jpg", caption: "월드오브탱크 광고전" },
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
        🖼️ 3월의 갤러리
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
    title: "유튜브 10만명 달성과 감자바쓰 출연",
    description:
      "3월 1일, 리코는 강지와 함께한 감자바쓰 컨텐츠에 출연하며 유튜브 10만명 달성의 기쁨을 팬들과 함께 나눴습니다. 꿈을 향한 길에 있어 소중한 이정표가 된 순간이었습니다.",
  },
  {
    title: "스텔 마크 서버에서 성장",
    description:
      "3월 초, 스텔 마크 서버에서 구리 던전 탐험과 네더라이트 풀셋 완성을 달성하며 한 단계 더 성장한 리코의 모습이 돋보였습니다.",
  },
];

const part2 = [
  {
    title: "15th 커버곡 '래빗홀' 공개",
    description:
      "3월 11일, 리코는 새로운 커버곡 '래빗홀'을 공개했습니다. 조금 어둡고 신비로운 세계를 특유의 섬세한 감성으로 표현하며 팬들에게 깊은 인상을 남겼습니다.",
  },
  {
    title: "용사님의 듀엣 모험 (유즈카 리호 편)",
    description:
      "3월 11일, 리코 주최 컨텐츠 '용사님의 듀엣 모험'이 시작되었습니다. 첫 게스트 유즈카 리호와 함께 노래를 부르며 유쾌하고 감동적인 시간을 보냈습니다.",
  },
];

const part3 = [
  {
    title: "배틀그라운드 광고전, 샌드박스 러스트 입성",
    description:
      "3월 14일 배그 8주년 스텔 대결 광고전에 참가한 리코. 이어서 3월 20일부터 샌드박스 러스트 서버에 합류하여 콧김팀과 함께 수많은 모험과 전투를 펼쳤습니다.",
  },
];

const part4 = [
  {
    title: "MCN 대전 시즌5 & 월드오브탱크 부코대전",
    description:
      "3월 28일 MCN 대전 시즌5, 3월 29일 월드오브탱크 부코대전 등 다양한 이벤트에 참여하며 뛰어난 활약을 보여준 리코. 승부욕 넘치는 모습으로 팬들에게 즐거움을 안겨주었습니다.",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
