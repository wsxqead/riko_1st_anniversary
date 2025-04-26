import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_12() {
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
          📖 2024년 12월호 - 변화, 설렘, 그리고 새로운 시작
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          올해의 마지막 달, 리코는 새로운 세계에 발을 들이고, 따뜻한 노래를
          부르며, 더 큰 꿈을 향해 걸어갔습니다.
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
          <li>01. 🌍 봉누도에서 시작된 새로운 모험</li>
          <li>02. ❄️ 따뜻한 겨울을 노래하며</li>
          <li>03. 🎄 모두가 함께한 크리스마스</li>
          <li>04. ✨ 리코의 새로운 이야기</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>

      {/* Sections */}
      <Section title="🌍 봉누도에서 시작된 새로운 모험" items={part1} />
      <Section title="❄️ 따뜻한 겨울을 노래하며" items={part2} />
      <Section title="🎄 모두가 함께한 크리스마스" items={part3} />
      <Section title="✨ 리코의 새로운 이야기" items={part4} />

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
          <p className="italic">Q. 12월을 한 단어로 표현한다면?</p>
          <p>
            &quot;변화. 올 한 해를 마무리하며, 새로운 세계를 만났고, 새로운
            모습을 보여드릴 수 있었어요.&quot;
          </p>
          <p className="italic">Q. 가장 기억에 남는 순간은요?</p>
          <p>
            &quot;처음으로 팬분들께 신의상을 보여드렸던 날이요. 무대에 서기 전,
            설렘과 긴장으로 심장이 두근거렸던 그 순간을 잊지 못할 것
            같아요.&quot;
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
          2024년의 마지막 달. 서툴렀지만, 따뜻했고, 무엇보다 소중했던
          순간들이었습니다. 새로운 세계로 한 발 더 나아간 리코. 그리고 항상 그
          곁을 지켜준 여러분. 우리가 함께라면, 앞으로의 모든 날도 분명히 빛날
          거예요. 새해에도, 그리고 그 이후에도, 함께 걸어가요.
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
    { image: "/images/dec_bongnudo.jpg", caption: "봉누도 서버 모험 장면" },
    {
      image: "/images/dec_wrinklecover.jpg",
      caption: "9th 커버곡 '주름맞추기'",
    },
    {
      image: "/images/dec_christmassong.jpg",
      caption: "10th 커버곡 '크리스마스송'",
    },
    {
      image: "/images/dec_xmascollab.jpg",
      caption: "스텔라이브 크리스마스 합방",
    },
    { image: "/images/dec_newoutfit.jpg", caption: "리코 첫 신의상 공개" },
    {
      image: "/images/dec_palworld.jpg",
      caption: "팰월드 스텔라이브 서버 합류",
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
        🖼️ 12월의 갤러리
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
    title: "GTA 대형 스트리머 서버 '봉누도' 활동",
    description:
      "11월 말 합류한 이후, 12월에는 본격적으로 '봉누도' 세계 속 모험이 시작되었습니다. 처음 만나는 사람들, 처음 경험하는 넓은 세계, 그리고 그 속에서 조금씩 성장해가는 리코. '처음은 늘 낯설지만, 설렘도 함께 있으니까요.'",
  },
];

const part2 = [
  {
    title: "9th 커버곡 '주름맞추기' 발표",
    description:
      "리코가 부른 9번째 커버곡 '주름맞추기'. 마음을 조심스럽게 꺼내어 노래하던 순간들. 작은 상처조차도 부드럽게 감싸는 따뜻한 목소리가 팬들의 겨울을 포근하게 감싸주었습니다. '조금 서툴러도, 여러분과 함께라면 괜찮아요.'",
  },
  {
    title: "10th 커버곡 '크리스마스송' 발표",
    description:
      "크리스마스 아침, 리코는 10번째 커버곡 '크리스마스송'을 팬들에게 선물했습니다. 기다려온 마음, 소중한 사람을 향한 따뜻한 감정을 담아, 하얀 눈처럼 고운 노래를 전했습니다. '함께 보내는 오늘이, 가장 큰 선물이에요.'",
  },
];

const part3 = [
  {
    title: "배틀그라운드 광고 사녹 업데이트 (3기생 출동)",
    description:
      "리코와 3기생 멤버들이 함께한 배틀그라운드 사녹 업데이트 광고 촬영! 서툴지만 열정 가득했던 촬영 현장, 그리고 서로 장난치며 웃었던 따뜻한 시간. '게임 속에서도, 현실에서도, 항상 함께해요!'",
  },
  {
    title: "스텔라이브 크리스마스 합방 (구스구스덕)",
    description:
      "연말을 맞아 진행된 스텔라이브 크리스마스 특별 합방! 구스구스덕 게임을 통해 웃고 소리 지르며, 서로의 소중함을 다시 느낄 수 있던 하루였습니다. '함께 웃은 이 시간, 평생 잊지 않을 거예요.'",
  },
];

const part4 = [
  {
    title: "리코 첫 신의상 공개",
    description:
      "팬들이 오래 기다려온 순간, 리코의 첫 번째 신의상이 드디어 공개되었습니다. 더 성숙해진 모습, 그리고 여전히 따뜻한 리코의 미소. 그 모든 것이 완벽하게 어우러진 순간. '이 옷을 입고, 앞으로도 여러분과 함께 꿈을 꿀게요.'",
  },
  {
    title: "팰월드 스텔라이브 서버 합류",
    description:
      "새로운 모험의 시작! 팰월드 스텔라이브 서버에 합류한 리코. 따뜻한 겨울밤, 새로운 친구들과 또 하나의 이야기를 시작했습니다. '다른 세계, 다른 친구들, 그리고 변하지 않는 여러분과 함께.'",
  },
];
