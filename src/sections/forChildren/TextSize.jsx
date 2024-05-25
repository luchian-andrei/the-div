/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const TextSize = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedTextSize, setSelectedTextSize] = useState("15px");

  const updateOption = (option) => {
    setSelectedTextSize(option);
  };

  useEffect(() => {
    handleChanges(selectedTextSize);
  }, [selectedTextSize]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Text Size
      </button>
      <Dropdown
        options={["10px", "15px", "20px", "25px", "30px"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default TextSize;
