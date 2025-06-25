import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../ui/Header";
import { getAllCardNames, getCardConfig } from "../../routes";

const ResultCards = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();
  const allCardNames = getAllCardNames();

  const handlePrev = () => {
    setDirection(-1);
    setCardIndex((i) => Math.max(i - 1, 0));
  };

  const handleNext = () => {
    if (cardIndex < allCardNames.length - 1) {
      setDirection(1);
      setCardIndex((i) => Math.min(i + 1, allCardNames.length - 1));
    } else if (cardIndex === allCardNames.length - 1) {
      // Navigate to personalized plan when on the last card
      navigate("/personalized-plan");
    }
  };

  const handleCardClick = (cardName: string) => {
    navigate(`/results/${cardName}`);
  };

  const handleBackToForm = () => {
    navigate("/quiz-form");
  };

  const currentCardName = allCardNames[cardIndex];
  const currentCardConfig = getCardConfig(currentCardName);
  const CardComponent = currentCardConfig?.component;

  if (!CardComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Card not found</div>
      </div>
    );
  }

  // Animation variants for card transitions
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 1,
    }),
  };

  // Calculate peek indexes for stacking effect
  const peekIndexes = [
    (cardIndex + 1) % allCardNames.length,
    (cardIndex + 2) % allCardNames.length,
  ];

  // Total offset for bottom cards
  const peekHeightOffset = (peekIndexes.length + 1) * 8;

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <Header cardIndex={cardIndex} totalCards={allCardNames.length} />

      {/* Card container with stacking effect */}
      <div className="flex items-center justify-center px-4 w-full">
        <div
          className="relative w-full max-w-[400px]"
          style={{ height: `${700 + peekHeightOffset}px` }}
        >
          {/* Peeked (static) bottom cards */}
          {peekIndexes.map((cardIdx, i) => {
            const peekCardName = allCardNames[cardIdx];
            const peekCardConfig = getCardConfig(peekCardName);
            const PeekCardComponent = peekCardConfig?.component;

            return (
              <div
                key={`peek-${peekCardName}`}
                className="absolute w-full bg-white rounded-[24px] shadow-[0_4px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] px-4 pt-8  h-[700px] overflow-hidden cursor-pointer"
                style={{
                  top: `${(i + 1) * 2}px`,
                  zIndex: i,
                }}
              >
                <div
                  className="h-full overflow-y-auto pr-2"
                  onClick={() => handleCardClick(peekCardName)}
                >
                  {PeekCardComponent && <PeekCardComponent />}
                </div>
              </div>
            );
          })}

          {/* Animated top card */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentCardName}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-4 pt-8 min-h-[700px] cursor-pointer hover:shadow-[0_6px_40px_rgba(0,0,0,0.15)] transition-shadow duration-200 z-50"
            >
              <CardComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation buttons outside the card */}
      <div className="flex justify-center items-end gap-5 pb-4 w-full max-w-[400px]">
        {(cardIndex > 0 || cardIndex === 0) && (
          <button
            type="button"
            onClick={cardIndex === 0 ? handleBackToForm : handlePrev}
            aria-label={cardIndex === 0 ? "Go back to form" : "Go back"}
            className="w-[160px] h-[40px] bg-white border border-primary text-primary font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-background-card focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="text-xl">&#8592;</span>
            {cardIndex === 0
              ? "Back to Form"
              : getCardConfig(allCardNames[cardIndex])?.previousButtonText}
          </button>
        )}

        {/* Next Button */}
        {cardIndex < allCardNames.length && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Go to next card"
            className="w-[160px] h-[40px] bg-primary hover:bg-primary-hover text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {cardIndex === allCardNames.length - 1 ? "Get My Plan" : "Next"}
            <span className="text-xl">&#8594;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ResultCards;
