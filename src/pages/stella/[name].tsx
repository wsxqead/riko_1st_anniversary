import { useRouter } from "next/router";
import { stella } from "@/data/stella";
import Image from "next/image";

export default function CollaboratorStory() {
  const router = useRouter();
  const { name } = router.query;
  const story = stella[name as keyof typeof stella];

  if (!story) return <p>해당 인물의 이야기가 없습니다.</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
        📖 {story.name}와 리코의 이야기
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {story.description}
      </p>

      {/* 📅 주요 순간들 */}
      <div className="w-full max-w-4xl">
        {story.events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">{event.date}</p>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.media.map((item, mediaIndex) =>
                item.includes("chzzk") || item.includes("youtube") ? (
                  <iframe
                    key={mediaIndex}
                    src={item}
                    className="w-full h-48 md:h-64 rounded-lg shadow-lg border-2 border-gray-400 dark:border-gray-600"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image
                    key={mediaIndex}
                    src={item}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                    alt={`${story.name} 이미지`}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
