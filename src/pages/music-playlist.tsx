export default function MusicPlaylist() {
  const playlist = [
    {
      title: "KING",
      type: "커버곡",
      vod: "https://chzzk.naver.com/video/5654788",
      timestamp: 3600,
    },
    {
      title: "Phony",
      type: "커버곡",
      vod: "https://chzzk.naver.com/video/5539306",
      timestamp: 5400,
    },
    {
      title: "ECHO",
      type: "커버곡",
      vod: "https://chzzk.naver.com/video/5324161",
      timestamp: 7200,
    },
  ];

  const generateChzzkLink = (vod: string, timestamp: number) => {
    return `${vod}?t=${timestamp}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        🎵 리코의 라이브 음악 타임라인
      </h1>
      <p className="mb-6 text-lg">
        방송 중 리코가 부른 노래를 타임라인과 함께 감상하세요!
      </p>

      <div className="w-full max-w-2xl space-y-4">
        {playlist.map((song, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <p className="text-xl font-semibold">{song.title}</p>
            <p className="text-sm text-gray-400">{song.type}</p>
            <a
              href={generateChzzkLink(song.vod, song.timestamp)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-500 px-4 py-2 rounded text-white"
            >
              ⏩ 해당 부분 감상하기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
