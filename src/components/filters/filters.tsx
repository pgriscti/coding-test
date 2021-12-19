import React from "react";
import "./filters.css";

interface FiltersProps {
  defaultMaxSpend: number;
  setMaxSpend: (maxSpend: number) => void;
}

export const Filters = ({ setMaxSpend, defaultMaxSpend }: FiltersProps) => {
  const [value, setValue] = React.useState(defaultMaxSpend);

  const updateMaxSpendValue = (value: number) => {
    setValue(value);
    setMaxSpend(value);
  };

  return (
    <div className="filters__container">
      <h2>Filters</h2>
      <h3 className="filters__spending">
        Total Spending: ${value.toLocaleString()}
      </h3>
      <input
        className="filters__input"
        type="range"
        min="0"
        max={defaultMaxSpend}
        defaultValue={value}
        onChange={(e) => updateMaxSpendValue(+e.target.value)}
      />
    </div>
  );
};
