/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";

const ChildrenNumber = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedChildrenNumber, setSelectedChildrenNumber] = useState(0);

  const updateOption = (option) => {
    setSelectedChildrenNumber(option);
  };

  useEffect(() => {
    handleChanges(selectedChildrenNumber);
  }, [selectedChildrenNumber]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Children Number
      </button>
      <Dropdown
        options={[0, 1, 2, 3, 4]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default ChildrenNumber;
