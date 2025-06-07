import React from "react";
import MetaphorCard from "./components/MetaphorCard";

const metaphors = [
  { text: "AI is a mirror", author: "LinkedIn user", sentiment: "ambiguous" },
  { text: "AI is a virus", author: "Tech skeptic", sentiment: "critical" },
  { text: "AI is a muse", author: "Creative coder", sentiment: "hopeful" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">AI Metaphor Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metaphors.map((m, idx) => (
          <MetaphorCard key={idx} {...m} />
        ))}
      </div>
    </div>
  );
}
