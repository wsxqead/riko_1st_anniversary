import SectionTitle from "@/components/SectionTitle";
import { quotes } from "@/data/wiseSaying";
import { useState, useMemo } from "react";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function RikoQuotes() {
  const { t } = useTranslation("common");
  const [remainingQuotes, setRemainingQuotes] = useState([...quotes]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const isVerticalVideo = useMemo(
    () =>
      currentQuote?.video.includes("chzzk") ||
      currentQuote?.video.includes("vertical") ||
      currentQuote?.video.includes("9/16"),
    [currentQuote]
  );

  const getRandomQuote = () => {
    let updatedQuotes = [...remainingQuotes];

    if (updatedQuotes.length === 0) {
      updatedQuotes = [...quotes];
    }

    const randomIndex = Math.floor(Math.random() * updatedQuotes.length);
    const newQuote = updatedQuotes[randomIndex];

    setRemainingQuotes(updatedQuotes.filter((q) => q.key !== newQuote.key));
    setCurrentQuote(newQuote);
  };

  if (!currentQuote) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 transition-all px-4">
      <SectionTitle
        title={t("quotes.title")}
        description={t("quotes.description")}
        colorClass="text-gray-500"
      />

      <div className="relative bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-2xl w-full max-w-4xl xl:max-w-5xl transition-all border-4 border-gray-300 dark:border-gray-700">
        <div
          className={`relative w-full ${
            isVerticalVideo ? "aspect-[9/16]" : "aspect-[16/9]"
          }`}
        >
          {currentQuote.video.includes("chzzk") ||
          currentQuote.video.includes("youtube") ? (
            <iframe
              src={currentQuote.video}
              className="w-full h-full rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-md"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Riko Video Clip"
            />
          ) : (
            <video
              src={currentQuote.video}
              controls
              className="w-full h-full rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-md"
            />
          )}
        </div>

        <div className="mt-5 p-4 bg-gray-200 dark:bg-gray-700 text-center rounded-lg border-l-4 border-blue-400 dark:border-blue-500">
          <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
            {t(`quotes.${currentQuote.key}`)}
          </p>
        </div>
      </div>

      <button
        onClick={getRandomQuote}
        className="mt-8 bg-blue-500 dark:bg-blue-600 px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-md transition-all hover:scale-105 hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {t("quotes.button")}
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nextConfig)),
    },
  };
}
