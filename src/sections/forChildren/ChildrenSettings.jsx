/* eslint-disable react/prop-types */
import Shadow from "./Shadow";
import TextSize from "./TextSize";
import TextColor from "./TextColor";
import ChildrenPadding from "./ChildrenPadding";
import Cursor from "./Cursor";
import TextAlign from "./TextAlign";
import BorderRadius from "./BorderRadius";
import FontWeight from "./FontWeight";
import BackgroundColor from "./BackgroundColor";
import FontFamily from "./FontFamily";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const ChildrenSettings = ({
  handleShadow,
  handleTextSize,
  handleTextColor,
  handleChildrenPadding,
  handleCursor,
  handleTextAlign,
  handleBorderRadius,
  handleFontWeight,
  handleChildrenBGColor,
  handleFontFamily,
  childrenSettings,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="w-full  flex flex-col items-start justify-start p-4  ">
      <p className="m-auto  shadow-sm rounded-md w-full  p-2 my-6 bg-gray-100 text-xl sticky top-0">
        {" "}
        Settings for your children
      </p>
      <div className="flex w-full flex-col md:flex-row justify-between items-start ">
        <div className="flex flex-col [&>div]:-mb-10 w-1/2 justify-start items-start ">
          <Shadow handleChanges={(option) => handleShadow(option)} />
          <TextSize handleChanges={(option) => handleTextSize(option)} />
          <TextColor handleChanges={(option) => handleTextColor(option)} />
          <ChildrenPadding
            handleChanges={(option) => handleChildrenPadding(option)}
          />
          <Cursor handleChanges={(option) => handleCursor(option)} />
        </div>
        <div className="flex flex-col [&>div]:-mb-10 w-1/2 justify-start items-start ">
          {" "}
          <TextAlign handleChanges={(option) => handleTextAlign(option)} />
          <BorderRadius
            handleChanges={(option) => handleBorderRadius(option)}
          />
          <FontWeight handleChanges={(option) => handleFontWeight(option)} />
          <BackgroundColor
            handleChanges={(option) => handleChildrenBGColor(option)}
          />
          <FontFamily handleChanges={(option) => handleFontFamily(option)} />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-between items-start ">
        <div className="flex flex-col  w-fit justify-start items-start bg-gray-100 text-black p-2 rounded-sm shadow-md">
          <p className="underline text-xl">
            Used settings{" "}
            <FontAwesomeIcon
              icon={faCircleQuestion}
              onMouseOver={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            />{" "}
          </p>

          <p className="my-1">
            shadow - &quot;{childrenSettings.childrenShadow}&quot;{" "}
          </p>
          <p className="my-1">
            cursor - &quot;{childrenSettings.childrenCursor}&quot;{" "}
          </p>
          <p className="my-1">
            textSize - &quot;{childrenSettings.childrenTextSize}&quot;{" "}
          </p>
          <p className="my-1">
            textColor - &quot;{childrenSettings.childrenTextColor}&quot;{" "}
          </p>
          <p className="my-1">
            textAlign - &quot;{childrenSettings.childrenTextAlign}&quot;{" "}
          </p>
          <p className="my-1">
            padding - &quot;{childrenSettings.childrenPadding}&quot;{" "}
          </p>
          <p className="my-1">
            borderRadius - &quot;{childrenSettings.childrenBorderRadius}&quot;{" "}
          </p>
          <p className="my-1">
            fontWeight - &quot;{childrenSettings.childrenFontWeight}&quot;{" "}
          </p>
          <p>
            backgroundColor - &quot;{childrenSettings.childrenBGColor}&quot;{" "}
          </p>
          <p className="my-1">
            fontFamily - &quot;{childrenSettings.childrenFontFamily}&quot;{" "}
          </p>
        </div>
        {showInfo && (
          <p className="p-5 bg-gray-100 border-2 border-gray-200   md:w-1/2 w-full h-fit leading-loose shadow-xl">
            These are the exact properties applied on the &quot;style&quot;
            attibute of the{" "}
            <span className="font-semibold"> children elements</span> inside the
            div on the right; these properties can be applied on any element, no
            matter of his purpose
          </p>
        )}
      </div>
    </div>
  );
};

export default ChildrenSettings;
