import React from "react";
import Select from "react-select";

const options = [
  { value: "Love", label: "Love" },
  { value: "Humour", label: "Humour" },
  { value: "Imagination", label: "Imagination" },
  { value: "Hope", label: "Hope" },
  { value: "Money", label: "Money" },
];

const MySelection = () => {
  return (
    <div style={{ width: "11rem" }}>
      <Select options={options} />
    </div>
  );
};

export default MySelection;
