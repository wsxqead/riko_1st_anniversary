import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MonthlyRiko_2024_10() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-20 transition-all">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2024년 10월호 - 목소리와 마음을 맞추며
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          노래하고 퍼즐을 풀고 어둠을 지나 다시 한 번 빛나는 순간을 맞이한 10월
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
          <li>01. 🎵 목소리와 마음을 맞춰</li>
          <li>02. 🌑 어둠을 걷는 작은 모험</li>
          <li>03. 📚 리코가 열어간 이야기</li>
          <li>04. 🌟 또 한 번의 성장</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>
      <Divider />

      <Section title="🎵 목소리와 마음을 맞춰" items={part1} />
      <Divider />
      <Section title="🌑 어둠을 걷는 작은 모험" items={part2} />
      <Divider />
      <Section title="📚 리코가 열어간 이야기" items={part3} />
      <Divider />
      <Section title="🌟 또 한 번의 성장" items={part4} />
      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🖼️ 10월의 갤러리
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
        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
          &quot;조심스럽지만 단단해진 한 걸음이었어요.&quot;
        </blockquote>
        <p className="text-sm text-gray-500">✨ 도전과 성장의 10월</p>
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
          작은 도전이 쌓여 작은 성장으로 이어진 10월. 다시 한 번 함께 앞으로
          나아갈 준비가 되었어요.
        </p>
      </motion.div>
    </div>
  );
}

const part1 = [
  {
    title: "5th 커버곡 'GETCHA!' 발표",
    description:
      "리코와 린이 함께 부른 첫 듀엣 커버곡, 서로 다른 매력을 하나로.",
    image: "/images/monthly/oct_getcha_cover.png",
  },
  {
    title: "협동게임 'We Were Here Too' 플레이",
    description: "린과 퍼즐을 풀며 협력한 탈출 게임 도전! 마음을 맞춘 모험.",
    image: "/images/monthly/oct_wewerehere.png",
  },
];

const part2 = [
  {
    title: "리틀 나이트메어 1 플레이",
    description:
      "체적으로 상당히 어둡고 갑툭튀라고 할 만한 건 많지 않지만, 심리적 압박감이 매우 강해서 몰입도가 상당한 이야기.",
    image: "/images/monthly/oct_littlenightmare1.png",
  },
  {
    title: "리틀 나이트메어 2 플레이",
    description:
      "더 깊어진 공포와 미스터리 속으로 그 끝에 다가오는 충격적인 결말까지.",
    image: "/images/monthly/oct_littlenightmare2.png",
  },
  {
    title: "아오오니 플레이",
    description:
      "파란 괴물의 추격 속에서 펼쳐지는 고전 공포게임 체험! 놀라면서도 포기하지 않고 끝까지 도전한 리코.",
    image: "/images/monthly/oct_aooni.png",
  },
  {
    title: "파피 플레이 타임 2 플레이",
    description:
      "익숙한 듯 낯선 공장의 어둠 속에서 퍼즐을 풀며 도망치는 긴박한 시간. 무섭지만 끝까지 해낸 리코!",
    image: "/images/monthly/oct_poppy2.png",
  },
];

const part3 = [
  {
    title: "필기체 도서관 주최",
    description:
      "리코가 직접 기획한 팬 참여 컨텐츠! 따뜻한 글씨로 소통한 시간.",
    image: "/images/monthly/oct_cursive_library.png",
  },
  {
    title: "오목 대회 참가",
    description: "진지함과 웃음이 함께한 스텔라이브 오목 대회!",
    image: "/images/monthly/oct_omok.png",
  },
];

const part4 = [
  {
    title: "6th 커버곡 '톤데모 원더즈' 발표",
    description: "활기차고 다채로운 보컬 매력, 리코의 새로운 도전.",
    image: "/images/monthly/oct_wonders_cover.png",
  },
  {
    title: "3기생 클리셰 합방 - 슈퍼 마리오 파티 잼버리",
    description: "멤버들과 함께한 끈끈한 우정과 웃음 가득한 하루.",
    image: "/images/monthly/oct_marioparty.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/oct_getcha_cover2.png",
    caption: "5th 커버곡 'GETCHA!' 썸네일",
  },
  {
    image: "/images/monthly/oct_wewerehere2.png",
    caption: "린과 'We Were Here Too' 협력 플레이",
  },
  {
    image: "/images/monthly/oct_wonders_cover2.png",
    caption: "6th 커버곡 '톤데모 원더즈' 썸네일",
  },
  {
    image: "/images/monthly/oct_marioparty2.png",
    caption: "3기생 합방 '슈퍼 마리오 파티 잼버리'",
  },
];

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

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
