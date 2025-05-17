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
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
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
      <Divider />
      {/* Sections */}
      <Section title="🌍 봉누도에서 시작된 새로운 모험" items={part1} />
      <Divider />
      <Section title="❄️ 따뜻한 겨울을 노래하며" items={part2} />
      <Divider />
      <Section title="🎄 모두가 함께한 크리스마스" items={part3} />
      <Divider />
      <Section title="✨ 리코의 새로운 이야기" items={part4} />
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
          2024년의 마지막 달. 서툴렀지만, 따뜻했고, 무엇보다 소중했던
          순간들이었습니다. 새로운 세계로 한 발 더 나아간 리코. 그리고 항상 그
          곁을 지켜준 여러분. 우리가 함께라면, 앞으로의 모든 날도 분명히 빛날
          거예요. 새해에도, 그리고 그 이후에도, 함께 걸어가요.
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
        🖼️ 12월의 갤러리
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
    title: "GTA 대형 스트리머 서버 '봉누도' 활동",
    description:
      "11월 말 합류한 이후, 12월에는 본격적으로 '봉누도' 세계 속 모험이 시작되었습니다. 처음 만나는 사람들, 처음 경험하는 넓은 세계, 그리고 그 속에서 조금씩 성장해가는 리코. '처음은 늘 낯설지만, 설렘도 함께 있으니까요.'",
    image: "/images/monthly/dec_bongnudo.png",
  },
  {
    title: "수영장 청소 알바로 친해진 떡순과 태봉",
    description:
      "봉누도에서 리코는 수영장 청소 아르바이트를 하며 떡순과 태봉이라는 친구들을 만나 친해졌습니다. 소소한 일상 속에서도 특별한 인연이 피어났던 순간.",
    image: "/images/monthly/dec_pool_cleaning.png",
  },
  {
    title: "경찰 교육생 리코",
    description:
      "리코는 봉누도에서 경찰 교육생으로 새로운 역할을 맡게 되었습니다. 어설프지만 열정 가득한 모습으로, 정의를 위해 노력하는 용사 리코의 또 다른 하루.",
    image: "/images/monthly/dec_police_training.png",
  },
  {
    title: "봉누도의 봄을 맞이하다",
    description:
      "추운 겨울이 지나고 찾아온 봉누도의 봄. 꽃이 피고 분위기가 따뜻해진 마을에서, 리코의 생활에도 작지만 소중한 변화들이 시작되었습니다.",
    image: "/images/monthly/dec_bongnudo_spring.png",
  },
  {
    title: "남북전쟁의 시작",
    description:
      "봉누도 내에서 벌어진 남북 분쟁과 긴장된 전투. 혼란 속에서도 자신의 역할을 다하며, 진심으로 사람들과 어울리려 했던 리코의 하루.",
    image: "/images/monthly/dec_civilwar.png",
  },
  {
    title: "봉누도 경찰 야유회",
    description:
      "남북전쟁 후, 경찰 조직 내부에서는 따뜻한 야유회를 진행했습니다. 캠프파이어와 선물 교환, 그리고 다 함께 나눈 웃음. 긴장을 내려놓고 힐링한 하루.",
    image: "/images/monthly/dec_police_picnic.png",
  },
];

const part2 = [
  {
    title: "9th 커버곡 '주름맞추기' 발표",
    description:
      "리코가 부른 9번째 커버곡 '주름맞추기'. 마음을 조심스럽게 꺼내어 노래하던 순간들. 작은 상처조차도 부드럽게 감싸는 따뜻한 목소리가 팬들의 겨울을 포근하게 감싸주었습니다. '조금 서툴러도, 여러분과 함께라면 괜찮아요.'",
    image: "/images/monthly/dec_wrinklecover.png",
  },
  {
    title: "10th 커버곡 '크리스마스송' 발표",
    description:
      "크리스마스 아침, 리코는 10번째 커버곡 '크리스마스송'을 팬들에게 선물했습니다. 기다려온 마음, 소중한 사람을 향한 따뜻한 감정을 담아, 하얀 눈처럼 고운 노래를 전했습니다. '함께 보내는 오늘이, 가장 큰 선물이에요.'",
    image: "/images/monthly/dec_christmassong.png",
  },
];

const part3 = [
  {
    title: "배틀그라운드 광고 사녹 업데이트 (3기생 출동)",
    description:
      "리코와 3기생 멤버들이 함께한 배틀그라운드 사녹 업데이트 광고 촬영! 서툴지만 열정 가득했던 촬영 현장, 그리고 서로 장난치며 웃었던 따뜻한 시간. '게임 속에서도, 현실에서도, 항상 함께해요!'",
    image: "/images/monthly/dec_pubg_sanhok.png",
  },
  {
    title: "스텔라이브 크리스마스 합방 (구스구스덕)",
    description:
      "연말을 맞아 진행된 스텔라이브 크리스마스 특별 합방! 구스구스덕 게임을 통해 웃고 소리 지르며, 서로의 소중함을 다시 느낄 수 있던 하루였습니다. '함께 웃은 이 시간, 평생 잊지 않을 거예요.'",
    image: "/images/monthly/dec_xmascollab.png",
  },
];

const part4 = [
  {
    title: "리코 첫 신의상 공개",
    description:
      "팬들이 오래 기다려온 순간, 리코의 첫 번째 신의상이 드디어 공개되었습니다. 더 성숙해진 모습, 그리고 여전히 따뜻한 리코의 미소. 그 모든 것이 완벽하게 어우러진 순간. '이 옷을 입고, 앞으로도 여러분과 함께 꿈을 꿀게요.'",
    image: "/images/monthly/dec_newoutfit.png",
  },
  {
    title: "스텔라이브 9인의 신의상을 직접 그린 리코",
    description:
      "리코는 스텔라이브 멤버 9명의 신의상 모습을 손수 그려 팬들과 공유했습니다. 따뜻한 시선으로 담아낸 일러스트는 팬들에게 큰 감동을 안겼습니다.",
    image: "/images/monthly/dec_newcostume_illust.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/dec_bongnudo2.png",
    caption: "봉누도 서버 모험 장면",
  },
  {
    image: "/images/monthly/dec_wrinklecover2.png",
    caption: "9th 커버곡 '주름맞추기'",
  },
  {
    image: "/images/monthly/dec_christmassong2.png",
    caption: "10th 커버곡 '크리스마스송'",
  },
  {
    image: "/images/monthly/dec_xmascollab2.png",
    caption: "스텔라이브 크리스마스 합방",
  },
  {
    image: "/images/monthly/dec_newoutfit2.png",
    caption: "리코 첫 신의상 공개",
  },
  {
    image: "/images/monthly/dec_newcostume_illust2.png",
    caption: "리코가 그린 멤버들 신의상",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
