export default function MusicPlaylist() {
  const youtubeShortCovers = [
    {
      title: "밤양갱 (Short Ver.)",
      type: "짧은 커버곡",
      youtube: "https://www.youtube.com/watch?v=xxxxx",
    },
    {
      title: "메멘토 (Short Ver.)",
      type: "짧은 커버곡",
      youtube: "https://www.youtube.com/watch?v=yyyyy",
    },
  ];

  const rikoCloudSongs = [
    {
      title: "모니터링 (モニタリング - DECO*27)",
      type: "리코 클라우드",
      youtube: "https://www.youtube.com/watch?v=yyyyy",
    },
  ];

  // 🎯 유튜브 링크에서 VIDEO ID 추출하는 함수
  const getYoutubeThumbnail = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/embed\/|.*\/v\/))([^&?]+)/
    );
    return match
      ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
      : "/images/default_thumb.jpg";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center p-6">
      {/* 🎉 헤더 */}
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 animate-pulse">
        🎶 리코 1주년 기념 음악 플레이리스트
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        리코의 유튜브 커버곡과 녹음된 특별한 곡들을 감상하세요! 🎤✨
      </p>

      {/* 🔹 유튜브 커버곡 섹션 */}
      <div className="w-full max-w-5xl space-y-6">
        <h2 className="text-3xl font-bold border-b-2 border-red-500 pb-2 text-center">
          🎤 유튜브 짧은 커버곡
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeShortCovers.map((song, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-x-4 transition transform hover:scale-105 hover:shadow-red-500"
            >
              <img
                src={getYoutubeThumbnail(song.youtube)}
                alt={`${song.title} 썸네일`}
                className="w-full md:w-36 h-36 rounded-lg object-cover"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold">{song.title}</p>
                <p className="text-sm text-gray-400">{song.type}</p>
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-red-500 px-6 py-2 rounded-lg text-white font-bold transition hover:bg-red-600"
                >
                  ▶ 유튜브에서 감상
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 리코 클라우드 섹션 */}
      <div className="w-full max-w-5xl space-y-6 mt-12">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 pb-2 text-center">
          ☁️ 리코 클라우드 녹음본
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rikoCloudSongs.map((song, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-x-4 transition transform hover:scale-105 hover:shadow-blue-500"
            >
              <img
                src="/images/cloud_thumb.jpg"
                alt={`${song.title} 썸네일`}
                className="w-full md:w-36 h-36 rounded-lg object-cover"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold">{song.title}</p>
                <p className="text-sm text-gray-400">{song.type}</p>
                <a
                  href={song.cloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-blue-500 px-6 py-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
                >
                  ☁️ 클라우드에서 듣기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ 배경 반짝이는 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-48 h-48 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
      </div>
    </div>
  );
}
