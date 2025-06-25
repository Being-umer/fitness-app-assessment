import type React from "react";
import { useQuizContext } from "../../context/QuizContext";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const getBmiCallout = (BMI: number) => {
  if (BMI < 26) {
    return {
      label: "Almost Healthy (<26 BMI)",
      text: "You're right on the edge — just a few small shifts could unlock better energy and faster fat-burning.",
      color: "text-yellow-600",
    };
  } else if (BMI >= 30 && BMI <= 34.9) {
    return {
      label: "Obese (30–34.9 BMI)",
      text: "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.",
      color: "text-red-500",
    };
  } else if (BMI >= 35) {
    return {
      label: "Very Obese (35+ BMI)",
      text: "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.",
      color: "text-red-700",
    };
  }
  return null;
};

const BmiInsights: React.FC = () => {
  const { quizData } = useQuizContext();

  // Show loading state if no quiz data
  if (!quizData) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const { BMI } = quizData;
  const callout = getBmiCallout(BMI);

  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        Your BMI Is <span className="text-secondary font-bold">{BMI}</span>
      </h2>

      {/* Subtitle */}
      <h1 className="text-lg font-bold text-dark-blue text-center mb-3 px-2 tracking-tighter">
        - What That Means
      </h1>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-6 px-4">
        <Image
          src={getImage("bmi-insight")}
          alt="BMI insights visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        BMI (Body Mass Index) is a quick way to estimate how your weight might
        affect your health based on your height and weight.
        <br />
        <br />
        When your BMI is too high, your body may store more fat than it uses.
        That can slow your metabolism, drain your energy, and make fat loss
        harder — even if you're putting in effort.
      </div>

      {/* Callout */}
      {callout && (
        <div className="w-full flex justify-center items-center text-start px-2">
          <p className="text-base font-normal text-secondary text-start tracking-tighter">
            {callout.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiInsights;
