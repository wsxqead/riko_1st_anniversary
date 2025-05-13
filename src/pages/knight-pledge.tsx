"use client";

import PledgeForm from "@/components/knight-pledge/PledgeForm";
import PledgePreview from "@/components/knight-pledge/PledgePreview";
import PledgeDownload from "@/components/knight-pledge/PledgeDownload";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function KnightPledgePage() {
  const { t } = useTranslation("common");
  const [nickname, setNickname] = useState("치코");
  const [title, setTitle] = useState<"Sir" | "Dame">("Sir");

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-[#f8f0e3] dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-all">
      <SectionTitle title={t("pledge.title")} colorClass="text-yellow-600" />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        <div className="flex-1 border-2 border-yellow-800 rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6">
          <PledgePreview nickname={nickname} title={title} />
        </div>

        <div className="w-full max-w-md space-y-6">
          <PledgeForm
            nickname={nickname}
            setNickname={setNickname}
            title={title}
            setTitle={setTitle}
          />
          <PledgeDownload nickname={nickname} title={title} />
        </div>
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
