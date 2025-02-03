export default function CoversArchive() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎤 리코의 커버곡 아카이브</h1>
      <p className="mb-6 text-lg text-center">
        리코가 부른 커버곡들을 감상하세요!  
        기존 커버곡 사이트를 포함하여 모든 곡을 한 곳에서 볼 수 있습니다.
      </p>

      {/* 아이프레임 방식 */}
      <div className="w-full max-w-4xl h-96 border-2 border-gray-600">
        <iframe 
          src="https://your-existing-cover-site.com" 
          className="w-full h-full"
          title="리코 커버곡 사이트"
        />
      </div>

      {/* 원본 사이트로 이동 */}
      <a
        href="https://your-existing-cover-site.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-blue-500 px-6 py-3 rounded text-white text-lg"
      >
        🔗 커버곡 사이트로 이동
      </a>
    </div>
  );
}
