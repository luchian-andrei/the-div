/* eslint-disable react/prop-types */
import TheDiv from "../components/TheDiv";
import DivSettings from "../sections/forDiv/DivSettings";
import ParentSettings from "../sections/forParent/ParentSettings";
import ChildrenSettings from "../sections/forChildren/ChildrenSettings";
import { useState } from "react";

const MobileView = () => {
  // states for divSettings
  const [backgroundColor, setBackgroundColor] = useState();
  const [borderColor, setBorderColor] = useState();
  const [childrenNumber, setChildrenNumber] = useState();
  const [borderWidth, setBorderWidth] = useState();

  // states for parentSettings

  const [display, setDisplay] = useState();
  const [alignItems, setAlignItems] = useState();
  const [padding, setPadding] = useState();
  const [gap, setGap] = useState();
  const [justifyContent, setJustifyContent] = useState();

  // states for childrenSettings
  const [childrenShadow, setChildrenShadow] = useState();
  const [childrenCursor, setChildrenCursor] = useState();
  const [childrenTextSize, setChildrenTextSize] = useState();
  const [childrenTextColor, setChildrenTextColor] = useState();
  const [childrenTextAlign, setChildrenTextAlign] = useState();
  const [childrenPadding, setChildrenPadding] = useState();
  const [childrenBorderRadius, setChildrenBorderRadius] = useState();
  const [childrenFontWeight, setChildrenFontWeight] = useState();
  const [childrenBGColor, setChildrenBGColor] = useState();
  const [childrenFontFamily, setChildrenFontFamily] = useState();

  return (
    <div className="flex flex-col justify-between items-start w-full gap-2">
      <div className="w-full flex flex-col justify-center items-center">
        <TheDiv
          divSettings={{
            backgroundColor,
            borderColor,
            childrenNumber,
            borderWidth,
          }}
          parentSettings={{
            display,
            alignItems,
            padding,
            gap,
            justifyContent,
          }}
          childrenSettings={{
            childrenShadow,
            childrenCursor,
            childrenTextSize,
            childrenTextColor,
            childrenTextAlign,
            childrenPadding,
            childrenBorderRadius,
            childrenFontWeight,
            childrenBGColor,
            childrenFontFamily,
          }}
        />
      </div>

      <div className="w-full flex flex-col ">
        <DivSettings
          handleBGColor={(option) => setBackgroundColor(option)}
          handleBorderColor={(option) => setBorderColor(option)}
          handleChildrenNumber={(option) => setChildrenNumber(option)}
          handleBorderWidth={(option) => setBorderWidth(option)}
          divSettings={{
            backgroundColor,
            borderWidth,
            borderColor,
            childrenNumber,
          }}
        />
        <p
          className={`bg-gray-100 p-2 text-xl  rounded-md shadow-xl mb-5 ${
            childrenNumber > 0 ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity duration-200 `}
        >
          Now your div became a parent. Congrats !
        </p>
        {childrenNumber > 0 && (
          <>
            <ParentSettings
              handleAlign={(option) => setAlignItems(option)}
              handleDisplay={(option) => setDisplay(option)}
              handleGap={(option) => setGap(option)}
              handleJustify={(option) => setJustifyContent(option)}
              handlePadding={(option) => setPadding(option)}
              parentSettings={{
                display,
                alignItems,
                padding,
                gap,
                justifyContent,
              }}
            />
            <ChildrenSettings
              handleShadow={(option) => setChildrenShadow(option)}
              handleTextSize={(option) => setChildrenTextSize(option)}
              handleTextColor={(option) => setChildrenTextColor(option)}
              handleChildrenPadding={(option) => setChildrenPadding(option)}
              handleCursor={(option) => setChildrenCursor(option)}
              handleTextAlign={(option) => setChildrenTextAlign(option)}
              handleBorderRadius={(option) => setChildrenBorderRadius(option)}
              handleFontWeight={(option) => setChildrenFontWeight(option)}
              handleChildrenBGColor={(option) => setChildrenBGColor(option)}
              handleFontFamily={(option) => setChildrenFontFamily(option)}
              childrenSettings={{
                childrenShadow,
                childrenCursor,
                childrenTextSize,
                childrenTextColor,
                childrenTextAlign,
                childrenPadding,
                childrenBorderRadius,
                childrenFontWeight,
                childrenBGColor,
                childrenFontFamily,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MobileView;
