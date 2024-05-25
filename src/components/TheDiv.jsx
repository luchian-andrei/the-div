/* eslint-disable react/prop-types */
import Children from "./Children";

const TheDiv = ({ divSettings, parentSettings, childrenSettings }) => {
  return (
    <div
      className="w-full h-96 md:w-4/5  transition-all duration-200 text-black  "
      style={{
        backgroundColor: divSettings.backgroundColor,
        borderColor: divSettings.borderColor,
        borderWidth: divSettings.borderWidth,
        padding: parentSettings.padding,
        display: parentSettings.display,
        justifyContent: parentSettings.justifyContent,
        alignItems: parentSettings.alignItems,
        gap: parentSettings.gap,
      }}
    >
      {divSettings.childrenNumber === 1 && (
        <Children text="Children 1" childrenSettings={childrenSettings} />
      )}
      {divSettings.childrenNumber === 2 && (
        <>
          <Children text="Children 1" childrenSettings={childrenSettings} />
          <Children text="Children 2" childrenSettings={childrenSettings} />
        </>
      )}
      {divSettings.childrenNumber === 3 && (
        <>
          <Children text="Children 1" childrenSettings={childrenSettings} />{" "}
          <Children text="Children 2" childrenSettings={childrenSettings} />{" "}
          <Children text="Children 3" childrenSettings={childrenSettings} />
        </>
      )}
      {divSettings.childrenNumber === 4 && (
        <>
          <Children text="Children 1" childrenSettings={childrenSettings} />
          <Children text="Children 2" childrenSettings={childrenSettings} />
          <Children text="Children 3" childrenSettings={childrenSettings} />
          <Children text="Children 4" childrenSettings={childrenSettings} />
        </>
      )}
    </div>
  );
};

export default TheDiv;
