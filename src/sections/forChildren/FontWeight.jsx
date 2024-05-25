/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const FontWeight = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFontWeight, setSelectedFontWeight] = useState("normal");

  const updateOption = (option) => {
    setSelectedFontWeight(option);
  };

  useEffect(() => {
    handleChanges(selectedFontWeight);
  }, [selectedFontWeight]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Font Weight
      </button>
      <Dropdown
        options={["normal", "bold", "bolder", "lighter"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default FontWeight;
