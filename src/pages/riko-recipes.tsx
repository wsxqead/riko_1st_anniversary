import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { recipes } from "@/data/recipes";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function RikoRecipes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-16 transition-all">
      <SectionTitle title="🍳 리코의 요리노트" colorClass="text-yellow-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {recipes.map((recipe, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 group"
          >
            <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-[#a6d0a6]">
                {recipe.title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {recipe.description}
              </p>

              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="mb-4 space-y-2">
                    <p>{step.text}</p>
                    {step.image && (
                      <div className="relative w-full h-48 rounded overflow-hidden">
                        <Image
                          src={step.image}
                          alt={`조리 단계 ${i + 1}`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
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
