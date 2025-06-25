import React, { createContext, useContext, useState } from "react";
import type { UserFormData } from "../types";

type QuizContextType = {
  quizData: UserFormData | null;
  setQuizData: React.Dispatch<React.SetStateAction<UserFormData | null>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizData, setQuizData] = useState<UserFormData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <QuizContext.Provider
      value={{ quizData, setQuizData, currentStep, setCurrentStep }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context)
    throw new Error("useQuizContext must be used within a QuizProvider");
  return context;
};
