"use client";

import type React from "react";
import { useQuizContext } from "../../context/QuizContext";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const WaterIntake: React.FC = () => {
  const { quizData } = useQuizContext();

  // Show loading state if no quiz data
  if (!quizData) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const { waterIntake } = quizData;
  const waterIntakeValue = waterIntake || "8";
  const callout = getWaterCallout(waterIntakeValue);

  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        Your Body Needs&nbsp;
        <span className="text-secondary font-bold">
          {waterIntakeValue}{" "}
        </span>{" "}
        Cups of Water Daily
      </h2>
      <span className="text-lg font-bold text-dark-blue text-center mb-3 px-2 tracking-tighter">
        Here's Why That Matters
      </span>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-6 px-4">
        <Image
          src={getImage("water-intake")}
          alt="Water intake visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        Hydration is a fat-burning multiplier. Without enough water, your body
        holds onto toxins, slows digestion, and burns fat less efficiently.
        <br />
        <br />
        Even mild dehydration can feel like fatigue, hunger, or sugar cravings.
        You're not lazy — you're likely underhydrated.
      </div>
      {/* Callout */}
      {callout && (
        <div className="w-full flex justify-center items-center text-start px-2 tracking-tighter">
          <p className="text-base font-normal text-secondary text-start tracking-tighter">
            {callout.text}
          </p>
        </div>
      )}
    </div>
  );
};

const getWaterCallout = (waterIntake: string) => {
  const value = Number(waterIntake);
  if (value > 6) {
    return {
      label: "More than 6 glasses",
      text: "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.",
      color: "text-green-600",
    };
  } else if (value >= 2 && value <= 6) {
    return {
      label: "2 to 6 glasses",
      text: "Drinking 2-6 glasses means you're getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.",
      color: "text-yellow-600",
    };
  } else if (value === 2) {
    return {
      label: "About 2 glasses",
      text: "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.",
      color: "text-orange-500",
    };
  } else if (value === 1) {
    return {
      label: "Only drinking 1 glass",
      text: "Only Drinking Coffee or Tea? Caffeine doesn't hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.",
      color: "text-red-700",
    };
  }
  return null;
};

export default WaterIntake;
