import type React from "react";
import { useQuizContext } from "../../context/QuizContext";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const getCallout = (gender: "Male" | "Female", bodyFatPercent: number) => {
  if (
    (gender === "Male" && bodyFatPercent < 24) ||
    (gender === "Female" && bodyFatPercent < 31)
  ) {
    return {
      label: "Almost Healthy",
      text: "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.",
      color: "text-yellow-600",
    };
  } else if (
    (gender === "Male" && bodyFatPercent >= 25 && bodyFatPercent <= 31) ||
    (gender === "Female" && bodyFatPercent >= 32 && bodyFatPercent <= 39)
  ) {
    return {
      label: "Obese",
      text: "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.",
      color: "text-red-500",
    };
  } else if (
    (gender === "Male" && bodyFatPercent >= 32) ||
    (gender === "Female" && bodyFatPercent >= 40)
  ) {
    return {
      label: "Very Obese",
      text: "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.",
      color: "text-red-700",
    };
  }
  return null;
};

const BodyFatCard: React.FC = () => {
  const { quizData } = useQuizContext();

  // Show loading state if no quiz data
  if (!quizData) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const { gender, bodyFatPercent } = quizData;
  // Use a default gender if empty string
  const genderValue = gender || "Male";
  const callout = getCallout(genderValue, bodyFatPercent);

  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        Your Body Fat Percentage Is{" "}
        <span className="text-secondary font-bold">{bodyFatPercent}%</span>
      </h2>

      {/* Subtitle */}
      <h1 className="text-lg font-bold text-dark-blue text-center my-3 px-2 tracking-tighter">
        Here's Why That Matters
      </h1>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-2 px-4">
        <Image
          src={getImage("body-fat")}
          alt="Body fat percentage visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        Your body fat percentage tells us how much of your body is lean mass
        (muscle, organs, bone) vs stored fat.
        <br />
        Too much stored fat doesn't just affect how you look — it impacts your
        energy, hormone balance, and ability to burn fat efficiently.
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

export default BodyFatCard;
