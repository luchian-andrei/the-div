/* eslint-disable react/prop-types */
import AlignItems from "./AlignItems";
import Display from "./Display";
import Gap from "./Gap";
import JustifyContent from "./JustifyContent";
import Padding from "./Padding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const ParentSettings = ({
  handleAlign,
  handleDisplay,
  handleGap,
  handleJustify,
  handlePadding,
  parentSettings,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="w-full  flex flex-col items-start justify-start p-4 ">
      <p className="m-auto  shadow-sm rounded-md w-full  p-2 my-6 bg-gray-100 text-xl sticky top-0">
        Settings for your parent
      </p>
      <div className="flex flex-col md:flex-row w-full justify-between items-start">
        <div className="flex flex-col [&>div]:-mb-10 w-1/2 justify-start items-start">
          <Display handleChanges={(option) => handleDisplay(option)} />
          <JustifyContent handleChanges={(option) => handleJustify(option)} />
          <AlignItems handleChanges={(option) => handleAlign(option)} />
        </div>
        <div className="flex flex-col  [&>div]:-mb-10 w-1/2 justify-start items-start">
          <Padding handleChanges={(option) => handlePadding(option)} />
          <Gap handleChanges={(option) => handleGap(option)} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-start">
        <div className="flex flex-col  w-fit justify-start items-start bg-gray-100 text-black p-2 rounded-sm shadow-md">
          <p className="underline text-xl">
            Used settings
            <FontAwesomeIcon
              icon={faCircleQuestion}
              onMouseOver={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            />{" "}
          </p>

          {Object.entries(parentSettings).map((entry, index) => (
            <p key={index} className="flex flex-row justify-between gap-3 my-1">
              <span>{entry[0]}</span>-<span>&quot;{entry[1]}&quot;</span>
            </p>
          ))}
        </div>
        {showInfo && (
          <p className="p-5 bg-gray-100 border-2 border-gray-200 md:w-1/2 w-full h-fit leading-loose shadow-xl">
            These are the exact properties applied on the &quot;style&quot;
            attibute of the div on the right; these properties can be applied on
            any element that hold other elements
            <span className="font-semibold"> (aka &quot;parent&quot; )</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default ParentSettings;
