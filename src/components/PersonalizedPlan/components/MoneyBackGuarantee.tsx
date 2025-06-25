import type React from "react";
import Image from "../../ui/Image";
import { getImage } from "../../../utils/images";

const MoneyBackGuarantee: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-8">
      <div className="flex justify-center items-center w-full">
        <h2
          className="text-4xl font-bold text-dark-blue mb-1 leading-tight px-2 tracking-tighter w-3/5"
          style={{ lineHeight: "1em" }}
        >
          Money Back Guarantee
        </h2>

        <div className="flex justify-center items-center mb-2 w-2/5">
          <Image
            src={getImage("money-back-logo")}
            alt="Body fat percentage visualization"
            width={90}
            height={95}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Description */}
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        By continuing, you represent that you are over 18 years of age and agree
        if for whatever reason you're unhappy with your plan to contact customer
        support for a refund.
        <br />
        We guarantee you'll see visible results or you'll receive a full refund
        within 60 days after your purchase.
      </div>

      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        We are confident with our service quality and its results. So, if you
        are ready to reach your goals, it's a risk-free offer.
        <br />
        You will only be charged $67 today for your first quarter (details
        above)
        <br />
        Your introductory period will last until Aug 27, 2025. You may cancel at
        any time before Aug 27, 2025, and you will not be charged.
        <br />
        If you don't cancel, KetoSlim will automatically continue your
        membership at the end of your introductory period and charge the
        membership fee of $67 quarterly until you cancel.
        <br />
        Your subscription will be bound by our{" "}
        <span className="text-secondary">Terms</span> and Privacy Policy.
      </div>
      <div className="text-base font-normal text-medium-blue leading-relaxed mb-4 px-2 tracking-tighter">
        If you would like a refund for any reason call
        <span className="text-secondary mx-2">1-800-695-5045</span>
        or email <span className="text-secondary">support@myketoslim.com</span>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
