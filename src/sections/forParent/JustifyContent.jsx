/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const JustifyContent = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDisplay, setSelectedDisplay] = useState("center");

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
        Justify Content
      </button>
      <Dropdown
        options={[
          "center",
          "space-between",
          "space-around",
          "space-evenly",
          "start",
          "end",
        ]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default JustifyContent;
