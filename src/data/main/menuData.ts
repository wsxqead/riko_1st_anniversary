"use client";

import { useTranslation } from "next-i18next";

export function useMenuData() {
  const { t } = useTranslation("common");

  return [
    {
      label: t("nav.history.title"),
      key: "history",
      children: [
        { href: "/timeline-history", label: t("nav.history.timeline") },
        { href: "/monthly-highlights", label: t("nav.history.monthly") },
        { href: "/riko-stats", label: t("nav.history.stats") },
      ],
    },
    {
      label: t("nav.music.title"),
      key: "music",
      children: [
        { href: "/music-playlist", label: t("nav.music.playlist") },
        { href: "/singing-history", label: t("nav.music.archive") },
        { href: "/original-songs", label: t("nav.music.original") },
      ],
    },
    {
      label: t("nav.anniversary.title"),
      key: "anniversary",
      children: [
        { href: "/fan-card", label: t("nav.anniversary.card") },
        { href: "/fan-card/gallery", label: t("nav.anniversary.gallery") },
        { href: "/knight-pledge", label: t("nav.anniversary.pledge") },
        { href: "/goods-catalog", label: t("nav.anniversary.goods") },
      ],
    },
    {
      label: t("nav.memories.title"),
      key: "memories",
      children: [
        { href: "/riko-quotes", label: t("nav.memories.quotes") },
        { href: "/style-book", label: t("nav.memories.style") },
        { href: "/riko-recipes", label: t("nav.memories.recipe") },
      ],
    },
  ];
}
