/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const Shadow = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedShadow, setSelectedShadow] = useState("none");

  const updateOption = (option) => {
    if (option === "small") {
      setSelectedShadow("0px 1px 2px 0px");
    } else if (option === "medium") {
      setSelectedShadow("0px 4px 6px -1px");
    } else if (option === "large") {
      setSelectedShadow("0px 10px 15px -3px");
    } else if (option === "x-large") {
      setSelectedShadow("0px 20px 25px -5px");
    } else {
      setSelectedShadow("none");
    }
  };

  useEffect(() => {
    handleChanges(selectedShadow);
  }, [selectedShadow]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Shadow
      </button>
      <Dropdown
        options={["none", "small", "medium", "large", "x-large"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default Shadow;
