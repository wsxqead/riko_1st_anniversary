import { motion } from "framer-motion";
import Image from "next/image";

export default function MonthlyRiko_2025_01() {
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
          📖 2025년 1월호 - 함께 시작한 새해의 이야기
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          팰월드에서의 모험, 따뜻한 노래, 그리고 다시 시작하는 새로운 걸음.
          리코와 함께한 1월은 기대와 설렘으로 가득했습니다.
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
          <li>01. 🌟 팰월드에서 함께한 새해</li>
          <li>02. 🎵 새해를 알린 노래</li>
          <li>03. ✈️ 잠시 쉬어간 시간</li>
          <li>04. 🎮 다시 함께한 모험과 노래</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />
      {/* Sections */}
      <Section title="🌟 팰월드에서 함께한 새해" items={part1} />
      <Divider />
      <Section title="🎵 새해를 알린 노래" items={part2} />
      <Divider />
      <Section title="✈️ 잠시 쉬어간 시간" items={part3} />
      <Divider />
      <Section title="🎮 다시 함께한 모험과 노래" items={part4} />
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
          <p className="italic">Q. 2025년 새해를 맞은 소감은?</p>
          <p>
            &quot;조금 긴장됐지만, 올해는 더 많은 이야기와 성장을 함께 나누고
            싶어요. 새로운 세계도, 새로운 노래도, 여러분과 함께라면 두렵지
            않아요.&quot;
          </p>
          <p className="italic">Q. 가장 특별했던 순간은요?</p>
          <p>
            &quot;팰월드 서버에서 모두와 함께 새해를 맞이했을 때요. 따뜻한
            마음들이 화면을 넘어 전해졌어요. 앞으로도 이런 순간을 많이 만들고
            싶어요.&quot;
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
          새해의 첫 발걸음을 여러분과 함께 시작할 수 있어서 정말 행복했습니다.
          기대와 설렘, 그리고 약간의 두려움까지도 함께 나누며, 2025년의 시작을
          특별하게 만들어 주셔서 감사합니다. 앞으로도 함께 많은 이야기를
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
        🖼️ 1월의 갤러리
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
    title: "팰월드에서 함께한 새해",
    description:
      "12월 31일부터 1월 초까지, 팰월드 스텔라이브 서버에서 새해를 맞이한 리코. 게임 속에서도 따뜻한 인사를 나누며, 새로운 세계에서 첫걸음을 내딛었습니다. '다른 세계에서의 첫 새해, 정말 기대됐어요!'",
    image: "/images/monthly/jan_palworld.png",
  },
];

const part2 = [
  {
    title: "11th 커버곡 '꽃의 탑' 발표",
    description:
      "리코가 새해를 맞아 선물한 11번째 커버곡 '꽃의 탑'. 소중한 사람들을 향한 감사와 다짐을 노래하며, 새해의 시작을 더욱 빛나게 했습니다. '한 송이 한 송이, 마음을 담아 불렀어요.'",
    image: "/images/monthly/jan_flowertower.png",
  },
];

const part3 = [
  {
    title: "스텔라이브 단체 일본 여행",
    description:
      "1월 20일부터 24일까지, 스텔라이브 멤버들과 함께 떠난 일본 여행. 오랜만에 방송이 아닌 오프라인에서 함께한 시간들 속에서, 소중한 추억을 쌓았습니다. '쉬는 것도, 함께라서 더 행복했어요.'",
    image: "/images/monthly/jan_japantrip.png",
  },
];

const part4 = [
  {
    title: "시부키와 'A Way Out' 합방",
    description:
      "1월 28일, 시부키와 함께한 'A Way Out' 감옥 탈출 합방! 협력과 웃음이 가득했던 특별한 모험의 순간. '둘이 함께라서 어떤 어려움도 이겨낼 수 있었어요!'",
    image: "/images/monthly/jan_awayout.png",
  },
  {
    title: "12th 커버곡 '절대 적대 완전 싫어' 발표",
    description:
      "같은 날, 시부키와 듀엣으로 부른 12번째 커버곡 '절대 적대 완전 싫어'가 공개되었습니다. 장난스럽고 유쾌한 에너지가 가득 담긴 특별한 듀엣. '시부키짱과 함께라서 더 신났어요!'",
    image: "/images/monthly/jan_zettai.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/jan_palworld.png",
    caption: "팰월드 스텔라이브 서버 새해 활동",
  },
  {
    image: "/images/monthly/jan_flowertower.png",
    caption: "11th 커버곡 '꽃의 탑'",
  },
  {
    image: "/images/monthly/jan_japantrip.png",
    caption: "스텔라이브 일본 여행",
  },
  {
    image: "/images/monthly/jan_awayout.png",
    caption: "시부키와 'A Way Out' 합방",
  },
  {
    image: "/images/monthly/jan_zettai.png",
    caption: "12th 커버곡 '절대 적대 완전 싫어'",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
