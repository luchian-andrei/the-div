/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const Gap = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedGap, setSelectedGap] = useState("0px");

  const updateOption = (option) => {
    setSelectedGap(option);
  };

  useEffect(() => {
    handleChanges(selectedGap);
  }, [selectedGap]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Gap
      </button>
      <Dropdown
        options={["0px", "5px", "10px", "15px", "30px"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default Gap;
