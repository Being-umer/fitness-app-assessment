import React from "react";
import { getImage } from "../../../utils/images";
import Image from "../../ui/Image";

const features = [
  {
    icon: getImage("recommend-calories"),
    text: "Daily Custom Meal Plan",
  },
  {
    icon: getImage("cart"),
    text: "Done-For-You Grocery Lists",
  },
  {
    icon: getImage("heart-pot"),
    text: "Overwhelm-Free Delicious Recipes",
  },
  {
    icon: getImage("education-icon"),
    text: "Weekly Tips & Guidance",
  },
];

const PlanFeatures: React.FC = () => (
  <div className="max-w-7xl mx-auto py-12">
    {/* Heading */}
    <h2 className=" text-dark-blue w-full text-start font-bold text-lg mb-4 tracking-tighter">
      Get all the right tools &amp; knowledge.
    </h2>

    {/* Horizontal layout: feature list & image */}
    <div className="relative flex w-full justify-between">
      {/* Left: Feature List */}
      <div className="flex w-1/2">
        <ul className="space-y-6">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-center">
              <img
                src={feature.icon}
                alt=""
                className="w-10 h-10 mr-4"
                loading="lazy"
              />
              <span className="text-accent font-semibold text-md tracking-tight">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: iPhone Image */}
      <div className=" flex justify-center w-2/5">
        <Image
          src={getImage("iphone-mockup-r")}
          alt="Phone Mockup"
          width={160}
          height={270}
        />
      </div>
    </div>
  </div>
);

export default PlanFeatures;
