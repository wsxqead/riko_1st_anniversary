import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2025_02() {
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
          📖 2025년 2월호 - 모험과 노래가 이어진 시간
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          새로운 세계를 향한 도전과, 봄을 부르는 노래가 함께했던 2월. 리코와
          팬들이 만들어낸 따뜻한 이야기.
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
          <li>01. 🌱 작은 도전, 새로운 시작</li>
          <li>02. 🎵 봄을 부르는 노래들</li>
          <li>03. 🛡️ 모험을 시작한 용사</li>
          <li>04. 🏰 스텔라이브 마크 서버 대모험</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>

      {/* Sections */}
      <Section title="🌱 작은 도전, 새로운 시작" items={part1} />
      <Section title="🎵 봄을 부르는 노래들" items={part2} />
      <Section title="🛡️ 모험을 시작한 용사" items={part3} />
      <Section title="🏰 스텔라이브 마크 서버 대모험" items={part4} />

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
          <p className="italic">Q. 2월을 한 마디로 표현한다면?</p>
          <p>
            &quot;성장. 작은 모험 하나하나가 모여, 어느새 큰 걸음을
            만들어주었어요.&quot;
          </p>
          <p className="italic">Q. 가장 특별했던 순간은요?</p>
          <p>
            &quot;스텔 마크 서버에서 모두와 함께 엔더 드래곤을 잡았던 순간이요.
            긴 여정을 함께 걸어온 느낌이었어요.&quot;
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
          2월은 작은 모험과 새로운 노래들이 쌓여, 잊지 못할 추억이 되었습니다.
          때로는 웃고, 때로는 놀라고, 함께 걸어온 하루하루가 모두 소중했어요.
          앞으로도, 다음 모험도, 함께해요.
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
    { image: "/images/feb_monhun.jpg", caption: "몬헌 아이스본 도전" },
    { image: "/images/feb_spring_song.jpg", caption: "마음예보 커버곡" },
    { image: "/images/feb_beyond.jpg", caption: "Beyond the way 커버곡" },
    {
      image: "/images/feb_markstart.jpg",
      caption: "스텔라이브 마크 서버 오픈",
    },
    { image: "/images/feb_enderdragon.jpg", caption: "엔더 드래곤 토벌 성공" },
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
        🖼️ 2월의 갤러리
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
    title: "몬헌 아이스본, 와일즈 베타 도전",
    description:
      "2월 초, 몬헌 아이스본과 와일즈 베타 테스트에 도전하며 실력을 갈고닦은 리코. 설렘과 긴장 속에서도 꾸준히 성장해나갔습니다. '강한 몬스터도, 함께하면 이겨낼 수 있어요!'",
  },
];

const part2 = [
  {
    title: "경화수월 50만뷰 달성 & '모니터링' 커버곡 공개",
    description:
      "2월 6일, 경화수월 커버곡이 50만뷰를 돌파하며 팬들과 함께 축하하는 시간을 가졌습니다. 리코는 감사 인사와 함께 새로운 커버곡 '모니터링'을 깜짝 공개하여 또 다른 감동을 전했습니다. '50만이라는 숫자보다, 함께 쌓아온 시간이 더 소중해요.'",
  },
  {
    title: "발렌타인데이 기념 '마음예보' 커버곡 발표",
    description:
      "2월 14일, 발렌타인데이를 맞아 리코는 커버곡 '마음예보'를 팬들에게 선물했습니다. 수줍은 감정을 가득 담은 따뜻한 노래는 팬들의 마음에 부드럽게 스며들었습니다. '오늘 하루, 여러분에게 사랑스러운 비가 내리길 바랄게요.'",
  },
  {
    title: "Beyond the way 커버곡 공개",
    description:
      "2월 20일, 나나, 린과 함께한 'Beyond the way' 커버곡 공개. 서로 다른 목소리가 하나로 어우러져, 특별한 감동을 선사했습니다. '셋이서 만들어낸 이 길을, 오래오래 기억하고 싶어요.'",
  },
];

const part3 = [
  {
    title: "새로운 모험의 시작, 스텔 마크 서버",
    description:
      "2월 중순, 스텔라이브 마크 서버가 오픈했습니다. 첫 집을 짓고, 용암에 빠지고, 친구들과 모험하며 웃음과 좌충우돌로 가득했던 나날. '처음부터 끝까지, 다 같이 만들어가는 세계예요.'",
  },
];

const part4 = [
  {
    title: "엔더 드래곤 토벌 대작전",
    description:
      "2월 25일, 클리셰 멤버들과 강지와 함께한 엔더 드래곤 토벌! 긴 여정 끝에 모두가 하나가 되어 이룬 승리. '우리가 함께라면 어떤 드래곤도 무섭지 않아요!'",
  },
];
