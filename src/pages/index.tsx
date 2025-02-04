import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">
        🎉 유즈하 리코 1주년 기념 사이트 🎉
      </h1>
      <p className="text-lg text-center text-gray-300 mt-2">
        리코의 1년을 함께 돌아보고, 팬들과 즐기는 공간!
      </p>

      {/* ✅ 이미지 컨테이너 크기 조정 */}
      <div className="relative w-full  mt-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={`/images/main.png`}
          alt="메인 이미지"
          layout="responsive"
          width={1920} // 이미지 원본 가로 크기
          height={1080} // 이미지 원본 세로 크기
        />
      </div>
    </main>
  );
}
