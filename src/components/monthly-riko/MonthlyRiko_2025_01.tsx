import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
          <li>03. 👻 다시 시작되는 공포 파피 플레이타임 플레이</li>
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
      <Section
        title="👻 다시 시작되는 공포 파피 플레이타임 플레이"
        items={part3}
      />
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
    images: [
      "/images/monthly/jan_palworld_1.png",
      "/images/monthly/jan_palworld_2.png",
      "/images/monthly/jan_palworld_3.png",
      "/images/monthly/jan_palworld_4.png",
    ],
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
    title: "파피 플레이타임 챕터 3",
    description:
      "1월 중순, 공포와 미스터리로 가득한 파피 플레이타임 챕터 3를 플레이한 리코. 갑작스러운 연출에도 당황하지 않고, 팬들과 함께 무서움을 이겨내는 모습이 인상적이었습니다.",
    image: "/images/monthly/jan_poppy3.png",
  },
  {
    title: "파피 플레이타임 챕터 4",
    description:
      "챕터 4에서는 더 깊어진 이야기와 난이도 있는 퍼즐이 리코를 기다리고 있었습니다. 놀람과 웃음을 오가는 리코의 리액션이 팬들의 사랑을 받았습니다.",
    image: "/images/monthly/jan_poppy4.png",
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
    image: "/images/monthly/jan_flowertower2.png",
    caption: "11th 커버곡 '꽃의 탑'",
  },
  {
    image: "/images/monthly/jan_awayout2.png",
    caption: "시부키와 'A Way Out' 합방",
  },
  {
    image: "/images/monthly/jan_zettai2.png",
    caption: "12th 커버곡 '절대 적대 완전 싫어'",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
