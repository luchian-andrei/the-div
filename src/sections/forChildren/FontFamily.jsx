/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const FontFamily = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("normal");

  const updateOption = (option) => {
    setSelectedFontFamily(option);
  };

  useEffect(() => {
    handleChanges(selectedFontFamily);
  }, [selectedFontFamily]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Font Family
      </button>
      <Dropdown
        options={["normal", "cursive", "fantasy", "monospace", "sans-serif"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default FontFamily;
