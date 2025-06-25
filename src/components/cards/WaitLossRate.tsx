import type React from "react";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const WaitLossRate: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        You Could Be Losing&nbsp;
        <span className="text-secondary font-bold">1.7 Ibs/Week</span>
      </h2>
      <span className="text-lg font-bold text-dark-blue text-center mb-3 px-2 tracking-tighter">
        With the Right Fuel Source
      </span>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-6 px-4">
        <Image
          src={getImage("wait-loss-rate")}
          alt="Weight loss rate visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        This is your potential, what your body could lose if it's in fat-burning
        mode. But that depends on getting your metabolism working with you, not
        against you
        <br />
        Low energy, stubborn cravings, and slow progress usually mean your body
        is still burning sugar instead of fat — and that keeps weight loss stuck
      </div>
      {/* Static Callout */}
      <div className="w-full flex justify-center items-center text-start px-2 tracking-tighter">
        <p className="text-base font-normal text-secondary text-start tracking-tighter">
          With your numbers, results could show up even faster than expected,
          but only if your metabolism is dialed in and you're burning fat, not
          sugar.
        </p>
      </div>
    </div>
  );
};

export default WaitLossRate;
