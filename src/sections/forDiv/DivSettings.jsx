/* eslint-disable react/prop-types */
import BackgroundColor from "./BackgroundColor";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import ChildrenNumber from "./ChildrenNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const DivSettings = ({
  handleBGColor,
  handleBorderColor,
  handleChildrenNumber,
  handleBorderWidth,
  divSettings,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="w-full  flex flex-col items-start justify-start p-4  ">
      <p className="m-auto shadow-sm rounded-md w-full  p-2 my-6 bg-gray-100 text-xl sticky top-0">
        Div settings
      </p>
      <div className="flex flex-col md:flex-row w-full justify-between items-start">
        <div className="flex flex-col [&>div]:-mb-10 w-1/2 justify-start items-start">
          <BackgroundColor handleChanges={(option) => handleBGColor(option)} />
          <BorderColor handleChanges={(option) => handleBorderColor(option)} />
        </div>
        <div className="flex flex-col [&>div]:-mb-10 w-1/2 justify-start items-start">
          <BorderWidth handleChanges={(option) => handleBorderWidth(option)} />
          <ChildrenNumber
            handleChanges={(option) => handleChildrenNumber(option)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-start">
        <div className="flex flex-col  w-fit justify-start items-start bg-gray-100 text-black p-2 rounded-sm shadow-md ">
          <p className="underline text-xl">
            Used settings{" "}
            <FontAwesomeIcon
              icon={faCircleQuestion}
              onMouseOver={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            />{" "}
          </p>
          {Object.entries(divSettings).map((entry, index) => (
            <p key={index} className="flex flex-row justify-between gap-3 my-1">
              <span>{entry[0]}</span>-<span>&quot;{entry[1]}&quot;</span>
            </p>
          ))}
        </div>
        {showInfo && (
          <p className="p-5 bg-gray-100 border-2 border-gray-200 w-full md:w-1/2 h-fit leading-loose shadow-xl ">
            These are the exact properties applied on the &quot;style&quot;
            attibute of the div on the right; these properties can be applied on
            any element, no matter of his purpose
          </p>
        )}
      </div>
    </section>
  );
};

export default DivSettings;
