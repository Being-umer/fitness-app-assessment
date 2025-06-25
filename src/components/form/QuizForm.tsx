import React, { useState, useEffect } from "react";
import type { UserFormData, Gender, WaterIntake } from "../../types";

interface Props {
  onSubmit: (data: UserFormData) => void;
  initialData?: UserFormData | null;
}

const UserInputForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<UserFormData>({
    gender: "",
    bodyFatPercent: 25,
    BMI: 32,
    calorieTarget: "",
    waterIntake: "",
    weightLossRate: "",
    seeResultsDays: "",
  });

  // Populate form with initial data when component mounts or initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const isFormValid = Object.values(formData).every((val) => val !== "");

  const handleChange = (field: keyof UserFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-[90vw] mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6"
    >
      <h2 className="text-center text-2xl font-semibold text-dark-blue">
        Let's Personalize <br /> Your Plan
      </h2>

      {/* Gender */}
      <div>
        <label className="block text-medium-blue mb-2">Your Gender</label>
        <div className="flex space-x-3">
          {(["Male", "Female"] as Gender[]).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => handleChange("gender", g)}
              className={`w-full py-2 rounded-xl border 
                ${
                  formData.gender === g
                    ? "bg-primary text-white"
                    : "bg-gray-light text-gray-700"
                }
              `}
            >
              {g}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          This helps personalize your metrics 📊
        </p>
      </div>

      {/* Body Fat Slider */}
      <div>
        <label className="block text-medium-blue mb-2">Body Fat %</label>
        <input
          type="range"
          min="0"
          max="100"
          value={formData.bodyFatPercent}
          onChange={(e) =>
            handleChange("bodyFatPercent", Number(e.target.value))
          }
          className="w-full accent-primary"
        />
        <p className="text-sm text-gray-700 mt-1">{formData.bodyFatPercent}%</p>
      </div>

      {/* BMI Slider */}
      <div>
        <label className="block text-medium-blue mb-2">BMI</label>
        <input
          type="range"
          min="0"
          max="40"
          value={formData.BMI}
          onChange={(e) => handleChange("BMI", Number(e.target.value))}
          className="w-full accent-primary"
        />
        <p className="text-sm text-gray-700 mt-1">{formData.BMI}</p>
      </div>

      {/* Calorie Target */}
      <div>
        <label className="block text-medium-blue mb-2">
          Daily Calorie Target
        </label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 1600"
          value={formData.calorieTarget}
          onChange={(e) => handleChange("calorieTarget", e.target.value)}
          className="w-full border rounded-xl p-2 bg-background-light focus:outline-none"
        />
      </div>

      {/* Water Intake */}
      <div>
        <label className="block text-medium-blue mb-2">Water Intake</label>
        <select
          value={formData.waterIntake}
          onChange={(e) =>
            handleChange("waterIntake", e.target.value as WaterIntake)
          }
          className="w-full border rounded-xl p-2 bg-background-light focus:outline-none"
        >
          <option value="">Select cups</option>
          <option value="1">1 Cup</option>
          <option value="2">2 Cups</option>
          <option value="4">4 Cups</option>
          <option value="6">6 Cups</option>
          <option value="8">8 Cups</option>
          <option value="9">9 Cups</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">Hydration is key 💧</p>
      </div>

      {/* Weekly Weight Loss Goal */}
      <div>
        <label className="block text-medium-blue mb-2">
          Weekly Weight Loss Goal
        </label>
        <input
          type="number"
          min="0"
          placeholder="Target lbs/week"
          value={formData.weightLossRate}
          onChange={(e) => handleChange("weightLossRate", e.target.value)}
          className="w-full border rounded-xl p-2 bg-background-light focus:outline-none"
        />
      </div>

      {/* See Results In Days */}
      <div>
        <label className="block text-medium-blue mb-2">
          Days to See Results
        </label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 10"
          value={formData.seeResultsDays}
          onChange={(e) => handleChange("seeResultsDays", e.target.value)}
          className="w-full border rounded-xl p-2 bg-background-light focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 rounded-xl text-white font-semibold
          ${isFormValid ? "bg-primary" : "bg-gray"}
        `}
      >
        Get My Results
      </button>
    </form>
  );
};

export default UserInputForm;
