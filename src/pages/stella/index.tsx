import { useRouter } from "next/router";
import Image from "next/image";

// 확정된 멤버 리스트
const stella = [
  {
    name: "강지",
    image: "/images/stella/kangji.jpg",
    path: "/stella/kangji",
  },
  {
    name: "칸나",
    image: "/images/stella/kanna.jpg",
    path: "/stella/kanna",
  },
  {
    name: "유니",
    image: "/images/stella/yuni.jpg",
    path: "/stella/yuni",
  },
  {
    name: "히나",
    image: "/images/stella/hina.jpg",
    path: "/stella/hina",
  },
  {
    name: "타비",
    image: "/images/stella/tabi.jpg",
    path: "/stella/tabi",
  },
  {
    name: "리제",
    image: "/images/stella/rize.jpg",
    path: "/stella/rize",
  },
  {
    name: "마시로",
    image: "/images/stella/mashiro.jpg",
    path: "/stella/mashiro",
  },
  {
    name: "나나",
    image: "/images/stella/nana.jpg",
    path: "/stella/nana",
  },
  {
    name: "린",
    image: "/images/stella/rin.jpg",
    path: "/stella/rin",
  },
  {
    name: "시부키",
    image: "/images/stella/shibuki.jpg",
    path: "/stella/shibuki",
  },
];

export default function Stella() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-16 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-10">
        📖 리코와 함께 빛나는 별들
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        리코와 함께했던 멤버들의 이야기를 책자로 만나보세요!
      </p>

      {/* 📚 책자 리스트 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stella.map((collaborator, index) => (
          <button
            key={index}
            onClick={() => router.push(collaborator.path)}
            className="relative w-48 h-64 shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={collaborator.image}
              alt={`${collaborator.name} 책 표지`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
