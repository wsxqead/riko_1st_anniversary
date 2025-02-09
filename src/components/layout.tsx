import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // 헤더 높이 가져오기
    const header = document.getElementById("site-header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-[90vh] md:min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      {/* 🔹 페이지 내용 */}
      <main
        className="flex-1 p-6 container mx-auto transition-all"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
