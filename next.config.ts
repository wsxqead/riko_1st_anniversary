import type { NextConfig } from "next";
import i18n from "./next-i18next.config.js";

const isAppRouter = false;

const nextConfig: NextConfig = {
  ...(isAppRouter ? {} : { i18n: i18n.i18n }),
  images: {
    domains: ["img.youtube.com"], // 🔥 유튜브 썸네일을 허용
  },
};

export default nextConfig;
