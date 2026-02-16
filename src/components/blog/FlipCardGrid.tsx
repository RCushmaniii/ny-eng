import FlipCard from "./FlipCard";

interface CardData {
  question: string;
  answer: string;
}

interface FlipCardGridProps {
  cards: CardData[];
}

export default function FlipCardGrid({ cards }: FlipCardGridProps) {
  const isOdd = cards.length % 2 !== 0;

  return (
    <div className="my-10 not-prose">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => {
          const isLast = i === cards.length - 1;
          return (
            <div
              key={i}
              className={isOdd && isLast ? "md:col-span-2 md:max-w-[50%] md:mx-auto" : ""}
            >
              <FlipCard question={card.question} answer={card.answer} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
