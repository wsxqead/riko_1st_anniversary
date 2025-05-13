import { format } from "date-fns";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface Props {
  nickname: string;
  title: "Sir" | "Dame";
}

export default function PledgePreview({ nickname, title }: Props) {
  const today = format(new Date(), "yyyy년 M월 d일");
  const { t } = useTranslation("common");

  return (
    <div
      id="pledge-preview"
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
        {t("pledge.preview.documentTitle")}
      </h2>

      {/* 본문 */}
      <p className="text-center text-lg mb-8 italic text-gray-700 dark:text-gray-300">
        {t("pledge.preview.kingdom")}
      </p>

      <p className="text-lg mt-8 whitespace-pre-line">
        {t("pledge.preview.declaration")}
      </p>

      <p className="text-2xl mt-6 font-semibold text-green-700 dark:text-green-400">
        {title} {nickname}
      </p>

      <p className="text-md mt-6 leading-relaxed whitespace-pre-line">
        {t("pledge.preview.oath")}
      </p>

      <div className="pt-6 text-sm">
        <p>
          {t("pledge.preview.date")}: {today}
        </p>
        <p>
          {t("pledge.preview.signer")}: {nickname}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs">{t("pledge.preview.by")}</p>
        <Image
          style={{ marginRight: 0 }}
          src="/images/riko-seal.png"
          alt="왕실 인장"
          width={100}
          height={100}
          className="mx-auto opacity-90 my-0"
        />
      </div>
    </div>
  );
}
