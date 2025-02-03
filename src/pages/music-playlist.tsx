export default function MusicPlaylist() {
  const playlist = [
    { title: "KING", type: "커버곡", link: "https://youtu.be/XXXXXX" },
    { title: "Phony", type: "커버곡", link: "https://youtu.be/YYYYYY" },
    { title: "ECHO", type: "커버곡", link: "https://youtu.be/ZZZZZZ" },
    { title: "오리지널 송 - 1st Anniversary", type: "오리지널곡", link: "https://youtu.be/WWWWWW" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎵 리코의 라이브 음악 플레이리스트</h1>
      <p className="mb-6 text-lg">리코가 불렀던 커버곡과 오리지널곡을 감상하세요!</p>
      <div className="w-full max-w-2xl space-y-4">
        {playlist.map((song, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold">{song.title}</p>
            <p className="text-sm text-gray-400">{song.type}</p>
            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-500 px-4 py-2 rounded text-white"
            >
              ▶ 감상하기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
