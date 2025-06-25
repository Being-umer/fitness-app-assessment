import React from "react";
import { getImage } from "../../../utils/images";

const sources = [
  {
    logo: (
      <div className="flex items-center mb-2 w-full justify-center">
        <img src={getImage("pmc-logo")} alt="PMC Logo" className="h-10 mr-2" />
      </div>
    ),
    text: (
      <>
        There is evidence to suggest that a Ketogenic Diet can help with weight
        loss, visceral adiposity, and appetite control.
      </>
    ),
    link: "#",
  },
  {
    logo: (
      <div className="flex flex-col items-center mb-2 w-full justify-center">
        <img
          src={getImage("clinic-logo")}
          alt="Mayo Clinic Logo"
          className="h-18 mb-1 "
        />
      </div>
    ),
    text: (
      <>
        Research shows that a keto diet can result in weight loss and
        improvements in cardiovascular risk factors.
      </>
    ),
    link: "#",
  },
];

const TrustedByProfessionals: React.FC = () => (
  <div className="w-full max-w-xl mx-auto my-">
    <div className="text-dark-blue font-bold text-3xl mb-8 tracking-tighter">
      Trusted by health &amp;
      <br />
      nutrition professionals
    </div>
    <div className="flex flex-col gap-4 w-full">
      {sources.map((source, idx) => (
        <div key={idx} className="mb-2">
          {source.logo}
          <div className="text-dark-blue text-md mb-1 font-medium">
            {source.text}
          </div>
          <a href={source.link} className="text-secondary text-sm underline">
            source
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default TrustedByProfessionals;
