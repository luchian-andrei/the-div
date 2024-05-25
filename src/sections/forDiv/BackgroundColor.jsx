/* eslint-disable react/prop-types */
import Dropdown from "../../components/Dropdown";
import { useState, useEffect } from "react";

const BackgroundColor = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("white");

  const updateOption = (option) => {
    setSelectedBackgroundColor(option);
  };

  useEffect(() => {
    handleChanges(selectedBackgroundColor);
  }, [selectedBackgroundColor]);

  return (
    <div>
      <button
        className="border-2 border-gray-200 p-2 shadow-md rounded-md bg-gray-100"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p> Background Color</p>
      </button>

      <Dropdown
        options={[
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
        // handleChanges={handleChanges}
        updateOption={updateOption}
      />
    </div>
  );
};

export default BackgroundColor;
