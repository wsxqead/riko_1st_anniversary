export default function GoodsCatalog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg animate-fade-in text-center">
        🎤 리코의 가상 굿즈 아카이브
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 가상 굿즈들을 감상하세요! 💙
      </p>

      {/* 굿즈 프레임 */}
      <div className="w-full max-w-5xl h-96 border-4 border-blue-500 rounded-lg shadow-xl overflow-hidden relative">
        <iframe
          src="https://wsxqead.github.io/rikoGoodsShop"
          className="w-full h-full"
          title="리코 가상 굿즈 사이트"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
          클릭하여 감상하세요!
        </div>
      </div>

      {/* 원본 사이트로 이동 */}
      <a
        href="https://wsxqead.github.io/rikoGoodsShop"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        🔗 굿즈 사이트로 이동
      </a>
    </div>
  );
}
