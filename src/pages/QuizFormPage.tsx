import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import UserInputForm from "../components/form/QuizForm";
import type { UserFormData } from "../types";

const QuizFormPage: React.FC = () => {
  const { setQuizData, quizData } = useQuizContext();
  const navigate = useNavigate();

  const handleSubmit = (data: UserFormData) => {
    console.log(data);
    setQuizData(data);
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <UserInputForm onSubmit={handleSubmit} initialData={quizData} />
    </div>
  );
};

export default QuizFormPage; 