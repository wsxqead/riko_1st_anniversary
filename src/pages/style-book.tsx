import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { outfitImages, outfitKeys } from "@/data/outfits";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";

export default function StyleBook() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-16 transition-all">
      <SectionTitle title={t("stylebook.title")} colorClass="text-pink-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {outfitKeys.map((key) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600"
          >
            <div className="relative overflow-hidden h-64">
              <Image
                src={outfitImages[key]}
                alt={t(`stylebook.outfits.${key}.title`)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 relative z-10 backdrop-blur-md bg-white/80 dark:bg-gray-800/80">
              <h2 className="text-xl font-bold mb-1 text-[#a6d0a6]">
                {t(`stylebook.outfits.${key}.title`)}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t(`stylebook.outfits.${key}.desc`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
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
