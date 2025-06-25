import React from "react";

const CheckmarkCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="var(--color-accent)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 12.5l2.5 2.5 5-5"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkCircle;
