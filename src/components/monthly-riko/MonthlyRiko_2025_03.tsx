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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold text-center text-[#A6D0A6] mb-10">
          🛡️ 전장의 중심에서
        </h2>

        <div className={`flex   items-center gap-8 `}>
          <div className="w-full  text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">
              {"배틀그라운드 광고전, 샌드박스 러스트 입성"}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {
                "3월 14일 배그 8주년 스텔 대결 광고전에 참가한 리코. 이어서 3월 20일부터 샌드박스 러스트 서버에 합류하여 콧김팀과 함께 수많은 모험과 전투를 펼쳤습니다."
              }
            </p>
          </div>
        </div>
        <div className={`flex   items-center gap-8 `}>
          <div className="w-full ">
            <Image
              src={"/images/monthly/mar_pubg_ad.png"}
              alt={"배틀그라운드 광고전, 샌드박스 러스트 입성"}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full ">
            <Image
              src={"/images/monthly/mar_rust_start.png"}
              alt={"배틀그라운드 광고전, 샌드박스 러스트 입성"}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </motion.div>
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
            &quot;러스트 서버에서 사장님 팀과 함께 뛰어다니던
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
        🖼️ 3월의 갤러리
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
    title: "유튜브 10만명 달성과 감자바쓰 출연",
    description:
      "3월 1일, 리코는 강지와 함께한 감자바쓰 컨텐츠에 출연하며 같은날 유튜브 10만명 달성의 기쁨을 팬들과 함께 나눴습니다. 꿈을 향한 길에 있어 소중한 이정표가 된 순간이었습니다.",
    image: "/images/monthly/mar_10k.png",
  },
  {
    title: "스텔 마크 서버에서 성장",
    description:
      "3월 초, 스텔 마크 서버에서 구리 던전 탐험과 네더라이트 풀셋 완성을 달성하며 한 단계 더 성장한 리코의 모습이 돋보였습니다.",
    image: "/images/monthly/mar_markgrowth.png",
  },
];

const part2 = [
  {
    title: "15th 커버곡 '래빗홀' 공개",
    description:
      "3월 11일, 리코는 새로운 커버곡 '래빗홀'을 공개했습니다. 조금 어둡고 신비로운 세계를 특유의 섬세한 감성으로 표현하며 팬들에게 깊은 인상을 남겼습니다.",
    image: "/images/monthly/mar_rabbithole.png",
  },
  {
    title: "용사님의 듀엣 모험 (유즈카 리호 편)",
    description:
      "3월 11일, 리코 주최 컨텐츠 '용사님의 듀엣 모험'이 시작되었습니다. 첫 게스트 유즈카 리호와 함께 노래를 부르며 유쾌하고 감동적인 시간을 보냈습니다.",
    image: "/images/monthly/mar_duet_riho.png",
  },
];

const part4 = [
  {
    title: "MCN 대전 시즌5",
    description:
      "3월 28일, 리코는 MCN 대전 시즌5에 참여하여 진지하면서도 유쾌한 모습을 보여주며 팬들에게 즐거움을 안겨주었습니다.",
    image: "/images/monthly/mar_mcn5.png",
  },
  {
    title: "월드오브탱크 부코대전",
    description:
      "3월 29일, 리코는 월드오브탱크 부코대전에 참가하여 승부욕 넘치는 플레이로 팬들의 응원을 받았습니다.",
    image: "/images/monthly/mar_mcn_tank.png",
  },
];

const gallery = [
  {
    image: "/images/monthly/mar_10k2.png",
    caption: "유튜브 10만명 달성!",
  },
  {
    image: "/images/monthly/mar_rabbithole2.png",
    caption: "15th 커버곡 '래빗홀' 공개",
  },
  {
    image: "/images/monthly/mar_ruststart.png",
    caption: "러스트 서버 합류",
  },
  {
    image: "/images/monthly/mar_mcn5_2.png",
    caption: "MCN 대전 시즌5 참가",
  },
  {
    image: "/images/monthly/mar_tank.png",
    caption: "월드오브탱크 광고전",
  },
];

function Divider() {
  return (
    <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700 my-12" />
  );
}
