import { timelineData } from "@/data/timelineData";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function TimelineHistory() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center py-16">
      <SectionTitle title={t("timeline.title")} colorClass="text-amber-500" />

      <div className="relative w-full max-w-4xl">
        {timelineData.map((yearData) => (
          <motion.div
            key={yearData.year}
            className="w-full relative mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-blue-500 pb-3 mb-20 text-center relative z-10">
              {yearData.year}
            </h2>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10 h-full w-1 bg-gray-700"></div>

            <div className="space-y-16 md:space-y-32 relative">
              {yearData.events.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:justify-between gap-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  viewport={{ amount: 0.2, once: true }}
                >
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gray-900"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  ></motion.div>

                  <motion.div
                    className={`w-full md:w-[45%] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white text-center md:text-left 
                    ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} 
                    ${event.color}`}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 10px rgba(255,255,255,0.2)",
                    }}
                  >
                    <div className="flex flex-col items-center md:items-start space-y-2">
                      <motion.span
                        className="text-3xl md:text-4xl"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                      >
                        {event.icon}
                      </motion.span>
                      <p className="text-base md:text-lg font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-4">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mt-3 keep-all">
                      {event.description}
                    </p>
                  </motion.div>

                  {event.image && (
                    <motion.div
                      className={`hidden md:flex md:w-[45%] items-center justify-center ${
                        index % 2 === 0
                          ? "md:mr-auto"
                          : "md:ml-auto md:order-first"
                      } group relative`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      viewport={{ amount: 0.2, once: true }}
                    >
                      <div className="relative w-[400px] h-[250px]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="rounded-lg border-2 border-gray-300 shadow-lg object-cover transition-opacity duration-300"
                        />
                        {event?.hoverImage && (
                          <Image
                            src={event.hoverImage}
                            alt={event.title + " (hover) "}
                            fill
                            className="rounded-lg border-2 border-gray-300 shadow-lg object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          />
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
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
