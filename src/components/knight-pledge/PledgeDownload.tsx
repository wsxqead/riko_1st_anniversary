"use client";

import html2canvas from "html2canvas";

interface Props {
  nickname: string;
  title: "Sir" | "Dame";
}

export default function PledgeDownload({ nickname, title }: Props) {
  const handleDownload = async () => {
    const target = document.getElementById("pledge-preview");

    if (!target) return;

    const canvas = await html2canvas(target, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${title}_${nickname}_기사서약서.png`;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition"
    >
      📥 PNG 다운로드
    </button>
  );
}
