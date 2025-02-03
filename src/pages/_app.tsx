import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/layout"; // 공통 레이아웃 추가

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
