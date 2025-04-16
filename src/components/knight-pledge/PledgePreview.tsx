import { format } from "date-fns";
import Image from "next/image";

interface Props {
  nickname: string;
  title: "Sir" | "Dame";
}

export default function PledgePreview({ nickname, title }: Props) {
  const today = format(new Date(), "yyyy년 M월 d일");

  return (
    // <div className="font-serif text-center space-y-6">
    <div
      className="bg-white dark:bg-gray-800 rounded-xl p-10 md:p-16 border-[3px] border-yellow-700 shadow-[0_4px_30px_rgba(0,0,0,0.2)] font-[Cinzel] leading-loose tracking-wide"
      style={{
        backgroundImage: "url('/images/parchment.png')",
        backgroundSize: "cover",
      }}
    >
      <Image
        src="/images/riko-crest.png"
        className="w-20 mx-auto mb-4"
        width={50}
        height={50}
        alt="리코 왕국 문장"
      />
      {/* 문서 제목 */}
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
        🏰 Royal Appointment of the Knight
      </h2>

      {/* 본문 */}
      <p className="text-center text-lg mb-8 italic text-gray-700 dark:text-gray-300">
        Kingdom of Stellachiko
      </p>

      <p className="text-lg mt-8">
        우리 스텔라치코 왕국의 리코 공주는
        <br />
        충성과 헌신을 맹세한 이에게
        <br />
        기사 작위를 부여함을 선포한다.
      </p>

      <p className="text-2xl font-semibold text-green-700 dark:text-green-400">
        {title} {nickname}
      </p>

      <p className="text-md mt-6 leading-relaxed">
        본인은 언제나 리코 공주의 방송을 응원하며, 그녀의 여정을 함께 할 것을
        맹세합니다. <br />
        본인은 리코 공주가 힘들 때 든든한 방패가 되어줄 것이며, 즐거울 땐 함께
        웃을 것을 서약합니다. <br />
        본인은 기사단의 일원으로서 다른 팬들과 우애를 나누고 질서를 지킬 것을
        다짐합니다.
      </p>

      <div className="pt-6 text-sm">
        <p>📅 서약일: {today}</p>
        <p>🖋️ 서명자: {nickname}</p>
      </div>

      <div className="mt-8">
        <p className="text-xs">By Royal Appointment of Princess Riko</p>
        <Image
          src="/images/riko-seal.png" // 도장 이미지 경로
          alt="왕실 인장"
          width={100}
          height={100}
          className="mx-auto opacity-90"
        />
      </div>
    </div>
  );
}
