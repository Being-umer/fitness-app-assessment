import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/routing/ProtectedRoute";

// Page components
const QuizFormPage = lazy(() => import("../pages/QuizFormPage"));
const ResultsPage = lazy(() => import("../pages/ResultsPage"));
const PersonalizedPlanPage = lazy(
  () => import("../pages/PersonalizedPlanPage")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/quiz-form" replace />,
  },
  {
    path: "/quiz-form",
    element: <QuizFormPage />,
  },
  {
    path: "/results",
    element: (
      <ProtectedRoute>
        <ResultsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/personalized-plan",
    element: (
      <ProtectedRoute>
        <PersonalizedPlanPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/quiz-form" replace />,
  },
];

// Import card components directly (not lazy loaded)
import BodyFatCard from "../components/cards/BodyFatCard";
import BMIInsights from "../components/cards/BMIInsights";
import RecommendCallories from "../components/cards/RecommendCallories";
import WaterIntake from "../components/cards/WaterIntake";
import WaitLossRate from "../components/cards/WaitLossRate";
import VisibleChangesTimelines from "../components/cards/VisibleChangesTimelines";

// Card configuration for individual routes
export const cardConfig = {
  "body-fat": {
    component: BodyFatCard,
    title: "Body Fat %",
    description: "Your body fat percentage analysis",
    previousButtonText: "Back to Form",
  },
  "bmi-insights": {
    component: BMIInsights,
    title: "BMI Insights",
    description: "Your BMI analysis and recommendations",
    previousButtonText: "Body Fat %",
  },
  "calorie-recommendations": {
    component: RecommendCallories,
    title: "Calorie Recommendations",
    description: "Personalized calorie intake recommendations",
    previousButtonText: "BMI",
  },
  "water-intake": {
    component: WaterIntake,
    title: "Water Intake",
    description: "Hydration recommendations",
    previousButtonText: "Caloric Intake",
  },
  "weight-loss-rate": {
    component: WaitLossRate,
    title: "Weight Loss Rate",
    description: "Your weight loss timeline",
    previousButtonText: "Hydration",
  },
  "visible-changes": {
    component: VisibleChangesTimelines,
    title: "Visible Changes Timeline",
    description: "When you'll see results",
    previousButtonText: "Weight Rate",
  },
};

// Helper function to get card config by name
export const getCardConfig = (cardName: string) => {
  return cardConfig[cardName as keyof typeof cardConfig];
};

// Helper function to get all card names
export const getAllCardNames = () => Object.keys(cardConfig);
