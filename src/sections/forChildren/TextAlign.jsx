/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const TextAlign = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedTextAlign, setSelectedTextAlign] = useState("center");

  const updateOption = (option) => {
    setSelectedTextAlign(option);
  };

  useEffect(() => {
    handleChanges(selectedTextAlign);
  }, [selectedTextAlign]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Text Align
      </button>
      <Dropdown
        options={["center", "start", "end", "stretch"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default TextAlign;
