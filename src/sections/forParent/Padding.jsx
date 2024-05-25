/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const Padding = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedPadding, setSelectedPadding] = useState("0px");

  const updateOption = (option) => {
    setSelectedPadding(option);
  };

  useEffect(() => {
    handleChanges(selectedPadding);
  }, [selectedPadding]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Padding
      </button>
      <Dropdown
        options={["0px", "10px", "15px", "20px", "25px", "30px"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default Padding;
