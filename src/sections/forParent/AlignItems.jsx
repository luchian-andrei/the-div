/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const AlignItems = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAlignItems, setSelectedAlignItems] = useState("center");

  const updateOption = (option) => {
    setSelectedAlignItems(option);
  };

  useEffect(() => {
    handleChanges(selectedAlignItems);
  }, [selectedAlignItems]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Align Items
      </button>
      <Dropdown
        options={["center", "start", "end", "stretch"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default AlignItems;
