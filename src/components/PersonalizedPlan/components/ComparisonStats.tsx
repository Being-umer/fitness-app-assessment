import React from "react";

interface StatColumnProps {
  bodyFat: string;
  bodyFatColor: string;
  stats: { label: string; value: number }[];
}

const StatColumn: React.FC<StatColumnProps> = ({
  bodyFat,
  bodyFatColor,
  stats,
}) => (
  <div className="flex-1 flex flex-col items-start px-4">
    <div className="mb-2">
      <div className="text-dark-blue font-bold text-lg tracking-tighter">
        Body Fat
      </div>
      <div className={`text-2xl font-bold tracking-tighter ${bodyFatColor}`}>
        {bodyFat}
      </div>
    </div>
    {stats.map((stat) => (
      <div key={stat.label} className="w-full my-2 gap-2">
        <div className="text-dark-blue text-sm font-bold tracking-tighter">
          {stat.label}
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${stat.value}%`,
              background: "var(--color-accent)",
              transition: "width 0.5s",
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

const ComparisonStats: React.FC = () => (
  <div className="flex max-w-xl mx-auto">
    <StatColumn
      bodyFat="20-25%"
      bodyFatColor="text-accent"
      stats={[
        { label: "Energy Levels", value: 30 },
        { label: "Physical Health", value: 15 },
        { label: "Metabolism Speed", value: 40 },
      ]}
    />
    <div className="w-px bg-gray-200 mx-4" />
    <StatColumn
      bodyFat="10-12%"
      bodyFatColor="text-accent"
      stats={[
        { label: "Energy Levels", value: 80 },
        { label: "Physical Health", value: 90 },
        { label: "Metabolism Speed", value: 95 },
      ]}
    />
  </div>
);

export default ComparisonStats;
