import React, { useState, useEffect } from "react";
import Checkbox from "../../../assets/svgs/Checkbox";

const KetoPlanOffer: React.FC = () => {
  const [selected, setSelected] = useState<"installments" | "full">("full");
  const [timer, setTimer] = useState(599); // 9:59 in seconds

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const minutes = String(Math.floor(timer / 60));
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-4 flex flex-col items-center font-sans">
      {/* Title */}
      <div className="text-dark-blue text-xl font-semibold mb-2 text-center">
        3 Month Custom Keto Plan
      </div>

      {/* Timer */}
      <div className="w-full flex items-center justify-between bg-accent text-white font-semibold rounded-full px-4 py-1 mb-4">
        <span>Discount expires in:</span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">
            {minutes}:{seconds}
          </span>
          <span className="ml-1 text-lg">&#128337;</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="w-full flex flex-col gap-4 mb-2">
        {/* Installments Option */}
        <div
          className={`w-full border rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
            selected === "installments"
              ? "border-2 border-primary-hover bg-background-card"
              : "border border-gray-300 bg-white"
          }`}
          onClick={() => setSelected("installments")}
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="font-bold text-lg text-dark-blue">
              3 PAYMENTS OF $29
            </div>
            <div className="flex items-center justify-between">
              <div className="text-dark-blue text-sm w-4/5">
                Just $29 today. Split the rest over 2 easy payments.
              </div>
              <div className="w-1/5 flex items-center justify-end">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === "installments"
                      ? "border-primary-hover bg-primary-hover"
                      : "border-gray-400 bg-white"
                  }`}
                >
                  {selected === "installments" && <Checkbox />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Payment Option */}
        <div
          className={`w-full border rounded-xl p-4 pt-5 pb-6 flex flex-col relative cursor-pointer transition ${
            selected === "full"
              ? "border-2 border-primary-hover bg-background-card"
              : "border border-gray-300 bg-white"
          }`}
          onClick={() => setSelected("full")}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
              DISCOUNT
            </span>
            <span className="bg-primary-hover text-white text-xs font-bold px-2 py-1 rounded">
              23% OFF
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="text-dark-blue text-sm w-4/5">
                1 Payment of $67. Pay in full today and save $20 instantly.
              </div>
              <div className="w-1/5 flex items-center justify-end">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === "full"
                      ? "border-primary-hover bg-primary-hover"
                      : "border-gray-400 bg-white"
                  }`}
                >
                  <span
                    className={
                      selected === "full" ? "opacity-100" : "opacity-0"
                    }
                  >
                    <Checkbox />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MOST POPULAR Badge */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-light-blue text-dark-blue text-xs font-bold px-3 py-1 rounded shadow">
            MOST POPULAR
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="w-full flex items-center mt-8 mb-4">
        <span className="w-5 h-5 bg-primary-hover rounded-full flex items-center justify-center mr-3">
          <Checkbox />
        </span>

        <span className="text-dark-blue text-sm font-medium">
          Risk-Free: Backed by 60-Day Money-Back Guarantee
        </span>
      </div>

      {/* Continue Button */}
      <button className="w-full bg-primary-hover text-white font-bold text-lg py-3 rounded-lg flex items-center justify-center mb-2 transition duration-200 hover:bg-primary-dark">
        Continue
        <span className="ml-2 text-2xl">&#8594;</span>
      </button>

      {/* Decline Link */}
      <div className="w-full text-center mt-2">
        <button className="text-gray-400 underline text-sm">
          No Thanks, I don't want my plan.
        </button>
      </div>
    </div>
  );
};

export default KetoPlanOffer;
