import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MonthlyRiko_2025_05() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
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
          작은 시작에서 출발해 긴 여정을 걸어온 리코와 팬들 데뷔 1주년을 함께
          기념하는 특별한 순간들.
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
          <li>01. 👶 어린이 리코의 동요 무대</li>
          <li>02. 🎤 스텔라이브 9인의 단체 커버곡</li>
          <li>03. 🌸 리코와 봄빛 데이트</li>
          <li>04. 🏫 클리셰 1주년 기념 콘텐츠</li>
          <li>05. 🖼️ 5월의 갤러리</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>

      <Divider />
      <Section title="👶 어린이 리코의 동요 무대" items={part1} />
      <Divider />
      <Section title="🎤 스텔라이브 9인의 단체 커버곡" items={part2} />
      <Divider />
      <Section title="🌸 리코와 봄빛 데이트" items={part3} />
      <Divider />
      <Section title="🏫 클리셰 1주년 기념 콘텐츠" items={part4} />
      <Divider />
      <GallerySection />
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
        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <p className="italic">
            Q. 1년을 지나 다시 시작점에 선 지금 어떤 기분인가요?
          </p>
          <p>(리코가 자유롭게)</p>
          <p className="italic">Q. 앞으로 팬들과 함께 그리고 싶은 이야기는?</p>
          <p>(리코가 자유롭게)</p>
        </div>
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
          (리코가 자유롭게)
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
  items: {
    title: string;
    description: string;
    image?: string;
    images?: string[];
  }[];
}) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <>
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
                {Array.isArray(item.images) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.images.map((img, i) =>
                      img ? (
                        <Image
                          key={i}
                          src={img}
                          alt={`${item.title} 이미지 ${i + 1}`}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg object-cover cursor-pointer"
                          onClick={() => setModalImage(img)}
                        />
                      ) : null
                    )}
                  </div>
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover cursor-pointer"
                    onClick={() => item.image && setModalImage(item.image)}
                  />
                ) : null}
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

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-[90vw] max-w-4xl h-auto">
            <Image
              src={modalImage}
              alt="확대 이미지"
              layout="responsive"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
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
        🖼️ 5월의 갤러리
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

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}

const part1 = [
  {
    title: "어린이 리코의 동요 무대",
    description:
      "5월 5일 어린이날 여섯 살 리코가 팬들을 위해 부른 동요! 순수함 가득한 목소리로 전한 따뜻한 선물.",
    image: "/images/monthly/may_kidsong.png",
  },
];

const part2 = [
  {
    title: "스텔라이브 9인의 단체 커버곡 발표",
    description:
      "5월 5일 스텔라이브 전 멤버가 함께 부른 특별한 'Tell Your World' 커버 프로젝트. 팬들에게 큰 감동을 안겨준 순간!",
    images: [
      "/images/monthly/may_tell_cover_1.png",
      "/images/monthly/may_tell_cover_2.png",
      "/images/monthly/may_tell_cover_3.png",
      "/images/monthly/may_tell_cover_4.png",
    ],
  },
];

const part3 = [
  {
    title: "리코와 봄빛 데이트",
    description:
      "5월 10일 설레는 봄의 햇살 속에서 팬들과 함께한 데이트. 따뜻한 공기 속 웃음과 이야기로 가득한 시간.",
    image: "/images/monthly/may_date.png",
  },
];

const part4 = [
  {
    title: "클리셰 1주년 리더정하기 & 수학여행 컨텐츠",
    description:
      "5월 18일 클리셰 1주년을 맞아 리더 선출과 수학여행이 펼쳐진 특별 방송. 웃음과 감동이 넘쳤던 기념일.",
    image: "/images/monthly/may_cliche_1st.png",
  },
  {
    title: "클리셰 단체 커버곡 '언노운 마더구스'",
    description:
      "데뷔 1주년을 맞아 공개된 클리셰 4인의 합창곡! 각각의 개성이 조화를 이룬 강렬한 보컬이 인상적인 무대였습니다.",
    image: "/images/monthly/may_unknown_mothergoose.png",
  },
];

const gallery = [
  { image: "/images/monthly/may2025_0.png", caption: "어린이날 리코" },
  { image: "/images/monthly/may2025_1.png", caption: "1주년 기념 포스터" },
  {
    image: "/images/monthly/may2025_2.png",
    caption: "스텔라이브 9인 커버곡 방송",
  },
  { image: "/images/monthly/may2025_3.png", caption: "봄빛 데이트 현장" },
  { image: "/images/monthly/may2025_4.png", caption: "클리셰 수학여행 미션" },
  {
    image: "/images/monthly/may2025_5.png",
    caption: "클리셰 1주년 기념 단체 커버곡",
  },
];
