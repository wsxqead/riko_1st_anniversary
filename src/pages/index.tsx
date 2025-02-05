import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 md:px-6 py-6">
      {/* ✅ 제목 */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </h1>
      <p className="text-base md:text-lg text-center text-gray-300 mt-2 md:mt-4">
        리코의 1년을 함께 돌아보고, 팬들과 즐기는 공간!
      </p>

      {/* ✅ 이미지 컨테이너 */}
      <div className="relative w-full max-w-6xl mx-auto mt-4 md:mt-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/main.png"
          alt="메인 이미지"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
    </main>
  );
}
