import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
  colorClass?: string;
}

export default function SectionTitle({
  title,
  description,
  colorClass = "text-[#A6D0A6]",
}: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-12 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={`text-3xl md:text-4xl font-extrabold drop-shadow-lg ${colorClass}`}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full" />
    </motion.div>
  );
}
