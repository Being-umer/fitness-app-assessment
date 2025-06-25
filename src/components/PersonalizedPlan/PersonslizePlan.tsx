import type React from "react";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";
import {
  ComparisonStats,
  KetoPlanOffer,
  PlanFeatures,
  ProgramBenefits,
  TrustedByProfessionals,
} from "./components";

const PersonalizedPlan: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        Your Personalized
        <br />
        KetoSlim Plan Is Ready
      </h2>

      {/* Image Section - Before and After */}
      <div className="relative flex justify-center items-center mb-4 px-4 gap-4">
        <div className="flex flex-col items-center">
          <Image
            src={getImage("portfolio-girls")}
            alt="Portfolio Girls"
            width={300}
            height={260}
          />

          {/* Label Bar */}
          <div className="flex justify-between items-center w-[300px] bg-white shadow-md rounded-xl px-8 py-2 mt-[-20px] z-10">
            <span className="text-xl font-bold text-dark-blue">Now</span>
            <span className="text-xl font-bold text-dark-blue">6 Months</span>
          </div>
        </div>
      </div>

      <ComparisonStats />
      <ProgramBenefits />
      <PlanFeatures />
      <TrustedByProfessionals />
      <KetoPlanOffer />
    </div>
  );
};

export default PersonalizedPlan;
