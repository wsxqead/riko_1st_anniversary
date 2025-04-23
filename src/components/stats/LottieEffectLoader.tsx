"use client";

import { useEffect } from "react";

export default function LottieEffectLoader() {
  useEffect(() => {
    const existing = document.querySelector("script[src*='dotlottie-player']");
    if (!existing) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
