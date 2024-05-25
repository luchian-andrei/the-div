/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const BorderWidth = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBorderWidth, setSelectedBorderWidth] = useState("4px");

  const updateOption = (option) => {
    setSelectedBorderWidth(option);
  };

  useEffect(() => {
    handleChanges(selectedBorderWidth);
  }, [selectedBorderWidth]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Border Width
      </button>
      <Dropdown
        options={["0px", "2px", "4px", "6px", "8px", "10px"]}
        visible={showOptions}
        // handleChanges={handleChanges}
        updateOption={updateOption}
      />
    </div>
  );
};

export default BorderWidth;
