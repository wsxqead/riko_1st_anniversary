import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2024_11() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      {/* 📖 Cover */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2024년 11월호 - 도전, 노래, 그리고 새로운 세계를 향해
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          짧지만 강렬했던 생존, 함께한 노래와 웃음, 그리고 새로운 세계로
          발걸음을 내딛은 시간.
        </p>
      </motion.div>

      {/* 📋 Contents */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#A6D0A6] mb-4">📋 Contents</h2>
        <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>01. 🛡️ 짧지만 강렬했던 도전</li>
          <li>02. 🎵 노래로 이어진 가을</li>
          <li>03. 🎉 모두와 만들어간 이야기</li>
          <li>04. 🌍 새로운 세계를 향해</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* Section 별 본문 */}
      <Section title="🛡️ 짧지만 강렬했던 도전" items={part1} />
      <Divider />
      <Section title="🎵 노래로 이어진 가을" items={part2} />
      <Divider />
      <Section title="🎉 모두와 만들어간 이야기" items={part3} />
      <Divider />
      <Section title="🌍 새로운 세계를 향해" items={part4} />
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
          <p className="italic">Q. 이번 11월을 한 단어로 표현한다면?</p>
          <p>
            &quot;함께. 누구보다 곁을 지켜준 모두와 함께 만들어간 시간.&quot;
          </p>
          <p className="italic">Q. 가장 기억에 남는 순간이 있다면요?</p>
          <p>
            &quot;100명과 함께한 합방, 그리고 봉누도 서버에 첫 발을 내딛던 순간,
            모든 시작이 특별했어요.&quot;
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
          작은 도전들이 모여, 따뜻했던 11월을 완성했습니다. 때로는 두렵고
          서툴렀지만, 함께 웃고 걸어온 여러분 덕분에 모든 하루가 특별했습니다.
          앞으로도 함께라면, 어떤 세계든 환하게 밝혀낼 수 있어요. 다음 달에도
          함께 걸어가요.
        </p>
      </motion.div>
    </div>
  );
}

/* Section 내용 */
const part1 = [
  {
    title: "스텔라이브 좀보이드 서버 생존 도전",
    description:
      "갑작스런 재앙 속에서도 리코는 스텔라이브 멤버들과 힘을 합쳐, 짧지만 치열한 생존에 도전했습니다. 웃음과 긴장이 함께했던 하루하루, 포기하지 않고 함께 걸어간 이야기.",
    image: "/images/monthly/nov_zomboid.png",
  },
];

const part2 = [
  {
    title: "7th 커버곡 '케세라세라' 발표",
    description:
      "걱정과 두려움 속에서도 담담하게 부른 리코의 일곱 번째 커버곡. '될 대로 되라'는 메시지처럼, 묵묵히 걸어가는 리코의 마음을 담았습니다.",
    image: "/images/monthly/nov_keseracover.png",
  },
  {
    title: "8th 커버곡 '경화수월' 발표",
    description:
      "맑고 투명한 감성으로 노래한 여덟 번째 커버곡. 차가운 달빛처럼 조용히 울려퍼지는 리코의 목소리가 가슴 깊이 남았습니다.",
    image: "/images/monthly/nov_gyunghwa.png",
  },
];

const part3 = [
  {
    title: "GTA5 습격 작전 (3기 클리셰 멤버들과)",
    description:
      "조심스럽고 서툴렀지만, 함께 웃고, 함께 도전하며 끝내 해냈던 GTA 습격. 동료애와 끈끈함을 다시 한번 느끼게 한 순간.",
    image: "/images/monthly/nov_gtaheist.png",
  },
  {
    title: "시청자 100명 대형합방 (에브리바디 원투스위치)",
    description:
      "100명의 팬들과 함께 웃고 뛰어놀았던 대형합방. 처음엔 긴장했지만, 팬들과 함께한 순간순간이 모두 소중했습니다.",
    image: "/images/monthly/nov_100switch.png",
  },
];

const part4 = [
  {
    title: "GTA 대형 스트리머 서버 '봉누도' 합류",
    description:
      "처음은 늘 설레고 두렵지만, 리코는 또 한 번 새로운 세계에 발을 디뎠습니다. 앞으로 펼쳐질 이야기들이 기대되는 시작.",
    image: "/images/monthly/nov_bongnudo.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/nov_zomboid2.png",
    caption: "스텔라이브 좀보이드 생존 도전",
  },
  {
    image: "/images/monthly/nov_keseracover2.png",
    caption: "7th 커버곡 '케세라세라'",
  },
  {
    image: "/images/monthly/nov_gyunghwa2.png",
    caption: "8th 커버곡 '경화수월'",
  },
  {
    image: "/images/monthly/nov_gtaheist2.png",
    caption: "GTA5 습격 작전",
  },
  {
    image: "/images/monthly/nov_100switch2.png",
    caption: "100명 대형합방",
  },
  {
    image: "/images/monthly/nov_bongnudo2.png",
    caption: "봉누도 서버 합류",
  },
];

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
        🖼️ 11월의 갤러리
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
