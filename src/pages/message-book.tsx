// "use client";

// import { useEffect, useRef } from "react";
// import { surveyMessages } from "@/data/surveyMessages";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// export default function MessageBook() {
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionRefs.current.forEach((section) => {
//       if (section) {
//         gsap.fromTo(
//           section,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             scrollTrigger: {
//               trigger: section,
//               start: "top 85%",
//             },
//           }
//         );
//       }
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-16">
//       {/* 📘 Header */}
//       <header className="text-center mb-16">
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-[#A6D0A6] drop-shadow-sm"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           📖 팬들이 남긴 메세지북
//         </motion.h1>
//         <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           리코의 1년을 함께 해준 팬들의 진심이 담긴 메시지를 모아 소개합니다.
//         </p>
//       </header>

//       {/* 📦 Sections */}
//       <div className="flex flex-col gap-16">
//         {surveyMessages.map((block, i) => (
//           <div
//             key={i}
//             ref={(el) => (sectionRefs.current[i] = el)}
//             className="space-y-8"
//           >
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-blue-500">
//                 {block.category}
//               </h2>
//             </div>

//             {/* 질문별 카드 슬롯 */}
//             <div className="space-y-6">
//               {block.questions.map((q, qIdx) => (
//                 <div
//                   key={qIdx}
//                   className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 p-6"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                     {q.question}
//                   </h3>
//                   <ul className="space-y-4">
//                     {q.answers.map((ans, aIdx) => (
//                       <li
//                         key={aIdx}
//                         className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 border border-gray-200 dark:border-gray-600"
//                       >
//                         <p className="text-sm text-gray-500 mb-1">
//                           🖊 {ans.author} | 📅 {ans.date}
//                         </p>
//                         <p className="text-gray-900 dark:text-white whitespace-pre-line">
//                           {ans.text}
//                         </p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
