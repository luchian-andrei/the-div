/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const TextColor = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedTextColor, setSelectedTextColor] = useState("black");

  const updateOption = (option) => {
    setSelectedTextColor(option);
  };

  useEffect(() => {
    handleChanges(selectedTextColor);
  }, [selectedTextColor]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        Text Color
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

export default TextColor;
