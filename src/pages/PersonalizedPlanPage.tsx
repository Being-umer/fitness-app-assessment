import React from "react";
import { useNavigate } from "react-router-dom";
import PersonalizedPlan from "../components/PersonalizedPlan/PersonslizePlan";
import MoneyBackGuarantee from "../components/PersonalizedPlan/components/MoneyBackGuarantee";

const PersonalizedPlanPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToResults = () => {
    navigate("/results");
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Back Button */}
      <div className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-[400px] mx-auto">
          <button
            onClick={handleBackToResults}
            className="text-primary font-semibold flex items-center gap-2 hover:text-primary-hover"
          >
            <span className="text-xl">&#8592;</span>
            Back to Results
          </button>
        </div>
      </div>

      {/* Card container */}
      <div className="flex items-center justify-center px-4 w-full pt-8">
        <div className="bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-4 pt-8 pb-10 w-full max-w-[400px] min-h-[650px]">
          <PersonalizedPlan />
        </div>
      </div>

      {/* Money Back Guarantee - Outside the white card */}
      <div className="flex items-center justify-center px-4 w-full pt-8 pb-8">
        <div className="w-full max-w-[400px]">
          <MoneyBackGuarantee />
        </div>
      </div>

      {/* Sticky Claim My Plan Button */}
      <div className="fixed bottom-0 left-0 right-0  px-4 py-4 z-50">
        <div className="max-w-[400px] mx-auto">
          <button className="w-full bg-primary-hover text-white font-semibold py-3 rounded-md flex items-center justify-center text-lg transition hover:bg-primary-dark">
            Claim My Plan
            <span className="ml-2 text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedPlanPage;
