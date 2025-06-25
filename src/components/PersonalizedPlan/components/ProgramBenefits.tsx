import React from "react";
import TickMark from "../../../assets/svgs/TickMark";

const benefits = [
  "Improving Digestion",
  "Toning Muscles",
  "Mental Wellness Reset",
  "Physical Endurance Boost",
];

const ProgramBenefits: React.FC = () => (
  <div className="flex flex-col items-center pt-6 w-full">
    <div className="text-dark-blue w-full text-start font-bold text-lg mb-4 tracking-tighter">
      Your program will also work on:
    </div>
    <ul className="space-y-3 w-full">
      {benefits.map((benefit) => (
        <li
          key={benefit}
          className="flex  items-center text-dark-blue font-medium text-base w-full"
        >
          <span className="mr-3 text-accent text-2xl">
            <TickMark />
          </span>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default ProgramBenefits;
