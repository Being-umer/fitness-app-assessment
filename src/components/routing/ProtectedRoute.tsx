import React from "react";
import { Navigate } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { quizData } = useQuizContext();
  
  if (!quizData) {
    return <Navigate to="/quiz-form" replace />;
  }
  
  return <>{children}</>;
}; 