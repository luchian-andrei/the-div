/* eslint-disable react/prop-types */
const Children = ({ text, childrenSettings }) => {
  return (
    <div
      className="transition-all duration-200"
      style={{
        boxShadow: childrenSettings.childrenShadow,
        cursor: childrenSettings.childrenCursor,
        fontSize: childrenSettings.childrenTextSize,
        fontWeight: childrenSettings.childrenFontWeight,
        color: childrenSettings.childrenTextColor,
        textAlign: childrenSettings.childrenTextAlign,
        padding: childrenSettings.childrenPadding,
        borderRadius: childrenSettings.childrenBorderRadius,
        backgroundColor: childrenSettings.childrenBGColor,
        fontFamily: childrenSettings.childrenFontFamily,
      }}
    >
      {text}
    </div>
  );
};

export default Children;
