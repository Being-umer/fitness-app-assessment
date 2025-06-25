export type Gender = "Male" | "Female" | "";
export type WaterIntake = "1" | "2" | "4" | "6" | "8" | "9" | "";

export interface UserFormData {
  gender: Gender;
  bodyFatPercent: number;
  BMI: number;
  calorieTarget: string;
  waterIntake: WaterIntake;
  weightLossRate: string;
  seeResultsDays: string;
} 