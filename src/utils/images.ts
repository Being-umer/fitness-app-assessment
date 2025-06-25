// Import all images from assets
import bodyFatImg from "../assets/pngs/body-fat.png";
import bmiInsightImg from "../assets/pngs/bmi-insight.png";
import recommendCaloriesImg from "../assets/pngs/recommend-calories.png";
import waterIntakeImg from "../assets/pngs/water-intake.png";
import waitLossRateImg from "../assets/pngs/wait-loss-rate.png";
import visibleChangesTimelineImg from "../assets/pngs/visible-changes-timeline.png";
import portfolioGirlsImg from "../assets/webp/portfolio-girls.png";
import cartImg from "../assets/webp/cart.webp";
import educationIconImg from "../assets/webp/education-icon.webp";
import heartPotImg from "../assets/webp/heart-pot.webp";
import iphoneMockupImg from "../assets/pngs/iphone-mockup-r.png";
import pmcLogoImg from "../assets/pngs/pmc-logo.png";
import clinicLogoImg from "../assets/pngs/clinic-logo.png";
import moneyBackLogoImg from "../assets/pngs/money-back-logo.png";

// Export image mapping
export const images = {
  "body-fat": bodyFatImg,
  "bmi-insight": bmiInsightImg,
  "recommend-calories": recommendCaloriesImg,
  "water-intake": waterIntakeImg,
  "wait-loss-rate": waitLossRateImg,
  "visible-changes-timeline": visibleChangesTimelineImg,
  "portfolio-girls": portfolioGirlsImg,
  cart: cartImg,
  "education-icon": educationIconImg,
  "heart-pot": heartPotImg,
  "iphone-mockup-r": iphoneMockupImg,
  "pmc-logo": pmcLogoImg,
  "clinic-logo": clinicLogoImg,
  "money-back-logo": moneyBackLogoImg,
} as const;

export type ImageKey = keyof typeof images;

// Helper function to get image by key
export const getImage = (key: ImageKey): string => {
  return images[key];
};
