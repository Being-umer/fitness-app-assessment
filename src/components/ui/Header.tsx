import React from "react";

interface HeaderProps {
  cardIndex: number;
  totalCards: number;
}

const Header: React.FC<HeaderProps> = ({ cardIndex, totalCards }) => {
  return (
    <div className="flex flex-col items-center rounded-t-[24px] max-w-[345px] w-full mb-4">
      {/* Logo */}
      <div className="flex items-center mb-2">
        <span className="text-primary font-bold text-xl tracking-wider">
          KETO
        </span>
        <span className="text-secondary font-semibold text-xl tracking-wider">
          SLIM
        </span>
      </div>
      {/* Your Results */}
      <div className="flex items-center justify-between w-full">
        <span className="text-primary font-semibold text-base">
          Your Results
        </span>
        {/* Progress Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalCards }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i <= cardIndex ? "bg-primary" : "bg-gray"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
