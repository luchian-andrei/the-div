/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const Display = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDisplay, setSelectedDisplay] = useState("block");

  const updateOption = (option) => {
    setSelectedDisplay(option);
  };

  useEffect(() => {
    handleChanges(selectedDisplay);
  }, [selectedDisplay]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Display
      </button>
      <Dropdown
        options={["block", "flex", "grid", "none"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default Display;
