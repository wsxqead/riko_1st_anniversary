"use client";

import PledgeForm from "@/components/knight-pledge/PledgeForm";
import PledgePreview from "@/components/knight-pledge/PledgePreview";
import PledgeDownload from "@/components/knight-pledge/PledgeDownload";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function KnightPledgePage() {
  const [nickname, setNickname] = useState("치코");
  const [title, setTitle] = useState<"Sir" | "Dame">("Sir");

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-[#f8f0e3] dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-all">
      <SectionTitle
        title="🏰 리코 왕국 공식 기사 서약서"
        colorClass="text-yellow-600"
      />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        {/* 미리보기 */}
        <div className="flex-1 border-2 border-yellow-800 rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6">
          <PledgePreview nickname={nickname} title={title} />
        </div>

        {/* 입력 폼 */}
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
