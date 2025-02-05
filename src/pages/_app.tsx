import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/layout"; // 공통 레이아웃 추가
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>유즈하 리코 1주년 기념 사이트</title>
        <meta name="description" content="리코의 1년을 기념하는 팬 사이트" />
        <meta property="og:title" content="유즈하 리코 1주년 기념 사이트" />
        <meta
          property="og:description"
          content="리코의 1년을 함께 돌아보는 공간"
        />
        <meta property="og:image" content="/images/main.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
