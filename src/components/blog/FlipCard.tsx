import { useState } from "react";

interface FlipCardProps {
  question: string;
  answer: string;
}

export default function FlipCard({ question, answer }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className="flip-card-wrapper"
      style={{ perspective: "1000px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={flipped ? "Showing answer. Click to show question." : "Showing question. Click to reveal answer."}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className="relative w-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "220px",
        }}
      >
        {/* Front face - Question */}
        <div
          className="absolute inset-0 rounded-xl shadow-md border border-slate-200 bg-white p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Question
          </div>
          <p className="text-slate-800 font-medium text-base leading-relaxed">
            {question}
          </p>
          <div className="mt-4 text-xs text-slate-400">
            Tap to reveal answer
          </div>
        </div>

        {/* Back face - Answer */}
        <div
          className="absolute inset-0 rounded-xl shadow-md border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Answer
          </div>
          <p className="text-slate-800 font-medium text-base leading-relaxed">
            {answer}
          </p>
          <div className="mt-4 text-xs text-slate-400">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}
