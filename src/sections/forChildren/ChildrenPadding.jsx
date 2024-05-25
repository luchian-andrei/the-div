/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const ChildrenPadding = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedChildrenPadding, setSelectedChildrenPadding] = useState("0px");

  const updateOption = (option) => {
    setSelectedChildrenPadding(option);
  };

  useEffect(() => {
    handleChanges(selectedChildrenPadding);
  }, [selectedChildrenPadding]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Padding
      </button>
      <Dropdown
        options={["0px", "10px", "15px", "20px", "30px"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default ChildrenPadding;
