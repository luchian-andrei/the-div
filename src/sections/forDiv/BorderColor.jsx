/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";

const BorderColor = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBorderColor, setSelectedBorderColor] = useState("lightgrey");

  const updateOption = (option) => {
    setSelectedBorderColor(option);
  };

  useEffect(() => {
    handleChanges(selectedBorderColor);
  }, [selectedBorderColor]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Border Color
      </button>
      <Dropdown
        options={[
          "red",
          "blue",
          "yellow",
          "green",
          "purple",
          "orangered",
          "violet",
          "pink",
          "white",
          "red",
          "blue",
          "orange",
          "yellow",
          "black",
          "aliceblue",
          "dodgerblue",
          "bisque",
          "gold",
          "darkorange",
          "crimson",
          "forestgreen",
          "palegreen",
          "darkorchid",
          "darkblue",
          "deeppink",
          "floralwhite",
        ]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default BorderColor;
