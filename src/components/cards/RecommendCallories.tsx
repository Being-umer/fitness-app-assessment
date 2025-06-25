import type React from "react";
import { useQuizContext } from "../../context/QuizContext";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const getCaloriesCallout = (calories: number) => {
  if (calories >= 1300 && calories <= 1500) {
    return {
      label: "Almost Healthy (1300–1500 kcal)",
      text: "You're already close — just upgrading your food quality could unlock smoother fat loss and better focus.",
      color: "text-yellow-600",
    };
  } else if (calories >= 1100 && calories <= 1299) {
    return {
      label: "Obese Range (1100–1299 kcal)",
      text: "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.",
      color: "text-red-500",
    };
  } else if (calories < 1100) {
    return {
      label: "Very Obese Range (<1100 kcal)",
      text: "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.",
      color: "text-red-700",
    };
  }
  return null;
};

const RecommendCallories: React.FC = () => {
  const { quizData } = useQuizContext();
  const calories = quizData?.calorieTarget
    ? Number(quizData.calorieTarget)
    : 2500;
  const callout = getCaloriesCallout(calories);

  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        You Should Be Eating Around{" "}
        <span className="text-secondary font-bold">{calories}</span> Calories
      </h2>
      <h1 className="text-lg font-bold text-dark-blue text-center mb-3 px-2 tracking-tighter">
        - But Not All Calories Are Equal
      </h1>

      {/* Image Section */}
      <div className="flex justify-center items-center  px-4">
        <Image
          src={getImage("recommend-calories")}
          alt="Calorie recommendations visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed  px-2 tracking-tighter">
        Your body burns calories just to stay alive — that's your BMR. Add in
        movement, and you burn even more. Eat less than you burn? You lose
        weight. Eat more? You store it. Simple math, but the type of calories
        still makes or breaks your results
        <br />
        Most people eat low-quality calories that spike cravings, crash energy,
        and cause fat to stick — even if they're technically under their daily
        limit
      </div>
      {/* Callout */}
      {callout && (
        <div className="w-full flex justify-center items-center text-start px-2 mt-3">
          <p className="text-base font-normal text-secondary text-start tracking-tighter">
            {callout.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default RecommendCallories;
