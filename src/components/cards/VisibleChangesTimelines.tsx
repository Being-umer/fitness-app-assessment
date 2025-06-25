import type React from "react";
import Image from "../ui/Image";
import { getImage } from "../../utils/images";

const VisibleChangesTimelines: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Title */}
      <h2
        className="text-3xl font-semibold text-dark-blue text-center mb-1 leading-tight px-2 tracking-tighter"
        style={{ lineHeight: "1em" }}
      >
        You Could See Results in as Little as&nbsp;
        <span className="text-secondary font-bold">10</span> Days
      </h2>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-6 px-4">
        <Image
          src={getImage("visible-changes-timeline")}
          alt="Visible changes timeline visualization"
          width={280}
          height={180}
          className="mx-auto"
        />
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        Visible change doesn't take forever — when your metabolism shifts, your
        body can start dropping bloat, water weight, and fat surprisingly fast
        <br />
        <br />
        It's not about how long you try — it's about whether your body's
        actually set up to change. The wrong plan wastes months.
      </div>

      {/* Static Callout */}
      <div className="w-full flex justify-center items-center text-start px-2 tracking-tighter">
        <p className="text-base font-normal text-secondary text-start tracking-tighter">
          You're already aware — and that's step one. Now imagine pairing that
          awareness with a plan that shows results in the mirror by day 10.
        </p>
      </div>
    </div>
  );
};

export default VisibleChangesTimelines;
