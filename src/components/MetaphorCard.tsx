import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  author: string;
  sentiment: string;
}

export default function MetaphorCard({ text, author, sentiment }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-4 shadow-md"
    >
      <h3 className="text-xl italic mb-2">“{text}”</h3>
      <p className="text-sm text-gray-600 mb-1">— {author}</p>
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{sentiment}</span>
    </motion.div>
  );
}
