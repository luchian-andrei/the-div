/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const Cursor = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCursor, setSelectedCursor] = useState("default");

  const updateOption = (option) => {
    setSelectedCursor(option);
  };

  useEffect(() => {
    handleChanges(selectedCursor);
  }, [selectedCursor]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100 cursor"
        onClick={() => setShowOptions(!showOptions)}
      >
        Cursor
      </button>
      <Dropdown
        options={["default", "text", "move", "wait", "help", "not-allowed"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default Cursor;
