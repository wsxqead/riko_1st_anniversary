import { useState } from "react";
import { messages } from "@/data/messages";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function MessageBook() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gray-100 dark:bg-gray-900 transition-all">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-8">
        📖 팬들이 남긴 메시지북
      </h1>

      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-6 w-[400px] h-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {msg.author}
            </h2>
            <p className="text-sm text-gray-500">{msg.date}</p>
            <p className="mt-4 text-gray-900 dark:text-white">{msg.text}</p>

            {msg.image && (
              <Image
                src={msg.image}
                width={300}
                height={200}
                className="rounded-lg mt-4"
                alt="팬아트"
              />
            )}

            {msg.video && (
              <iframe
                src={msg.video}
                className="w-full h-48 mt-4 rounded-lg"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
