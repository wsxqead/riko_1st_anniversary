import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MonthlyRiko_2024_06() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 space-y-14 transition-all">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#A6D0A6]">
          📖 2024년 6월호 - 새로운 세계를 향해
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          첫걸음을 뗀 용사 리코 새로운 세계와 동료를 만나며 성장한 한 달
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
          <li>01. 🎬 새로운 세계를 향한 첫걸음</li>
          <li>02. 🌟 리코의 특별한 도전과 준비</li>
          <li>03. 🧭 세계를 탐험하다</li>
          <li>04. 🤝 동료와 함께한 모험</li>
          <li>05. 🖼️ Gallery</li>
          <li>06. 📰 Special Feature</li>
          <li>07. 💬 Closing Message</li>
        </ul>
      </motion.div>

      <Section title="🎬 Part 1: 새로운 세계를 향한 첫걸음" items={part1} />
      <Divider />

      <Section title="🌟 Part 2: 리코의 특별한 도전과 준비" items={part2} />
      <Divider />

      <Section title="🧭 Part 3: 모험가 리코, 세계를 탐험하다" items={part3} />
      <Divider />

      <Section title="🤝 Part 4: 동료와 함께한 새로운 모험" items={part4} />
      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6]">
          🖼️ 6월의 갤러리
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
          진짜로 새로운 세계에 온 느낌이었어요. 모든 게 신기했어요.
          <br />첫 집을 짓고 다 같이 웃으며 돌아다닌 순간이 가장 기억나요!
        </blockquote>
        <p className="text-sm text-gray-500">
          ✨ 앞으로도 많은 친구들과 모험을 떠나고 싶어요!
        </p>
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
          6월 유즈하 리코는 수많은 세계를 여행하고 새로운 인연을 만들었습니다.
          모험은 아직 끝나지 않았어요. 앞으로도 함께 걸어가 주세요!
        </p>
      </motion.div>
    </div>
  );
}

const part1 = [
  {
    title: "클리셰 합방 'Content Warning'",
    description: "멤버들과 함께 웃음과 비명이 가득한 촬영 모험을 떠나다!",
    image: "/images/monthly/june_contentwarning.png",
  },
  {
    title: "감동 풀더빙 '산나비' 플레이",
    description: "모든 대사를 직접 읽어낸 진심 어린 풀더빙 도전!",
    image: "/images/monthly/june_sannabi.png",
  },
  {
    title: "사장님&클리셰와 데바데 합방",
    description: "겁 많은 리코의 긴장과 끈질긴 생존 본능이 폭발!",
    image: "/images/monthly/june_deadbydaylight.png",
  },
];

const part2 = [
  {
    title: "미소녀 용사 리코 마법소녀로 변신",
    description: "용사를 넘어 마법소녀로! 새로운 모습으로 팬들을 놀라게 하다!",
    image: "/images/monthly/june_magicalgirl.png",
  },
  {
    title: "맞춤법 용사 도전",
    description:
      "이세계에서는 맞춤법이 힘이다! 진지하게 임한 또다른 용사의 여정.",
    image: "/images/monthly/june_spellhero.png",
  },
  {
    title: "리코 the of 뮤직 리코더 공연",
    description: "처음 준비한 리코더 연주, 서툴지만 따뜻한 소리가 울려퍼지다.",
    image: "/images/monthly/june_recorder.png",
  },
];

const part3 = [
  {
    title: "스텔라이브 마크서버 입장",
    description: "새로운 세계에 첫발을 디디다! 집 짓기부터 탐험까지 시작.",
    image: "/images/monthly/june_minecraft.png",
  },
  {
    title: "3기생 첫 용암 구출 작전",
    description: "새벽에 펼쳐진 대 구출극.",
    image: "/images/monthly/june_minecraft2.png",
  },
];

const part4 = [
  {
    title: "나나와 협동게임 '오퍼레이션 탱고'",
    description: "동료와 손발을 맞춘 협력 대작전!",
    image: "/images/monthly/june_tango.png",
  },
  {
    title: "데뷔 1달 기념 쿠킹 스튜디오",
    description: "서툴지만 정성 가득, 팬들과 함께한 추억의 요리 방송.",
    image: "/images/monthly/june_cooking.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/june_contentwarning2.png",
    caption: "Content Warning 합방 명장면",
  },
  {
    image: "/images/monthly/june_sannabi2.png",
    caption: "산나비 풀더빙 플레이",
  },
  {
    image: "/images/monthly/june_meeting_tabi.png",
    caption: "타비와의 첫 만남",
  },
  {
    image: "/images/monthly/june_meeting_yuni.png",
    caption: "유니와의 첫 만남",
  },
  {
    image: "/images/monthly/june_meeting_hina.png",
    caption: "히나와의 첫 만남",
  },
  {
    image: "/images/monthly/june_meeting_kanna.png",
    caption: "칸나와의 첫 만남",
  },
  {
    image: "/images/monthly/june_meeting_mashiro.png",
    caption: "마시로와의 첫 만남",
  },
  {
    image: "/images/monthly/june_meeting_rize.png",
    caption: "리제와의 첫 만남",
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
