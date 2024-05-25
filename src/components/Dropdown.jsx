/* eslint-disable react/prop-types */
const Dropdown = ({ options, visible, updateOption }) => {
  return (
    <div
      className={`${
        visible ? " visible opacity-100" : "invisible opacity-0"
      } relative -top-11 left-full border-2 border-gray-200 p-2 shadow-md rounded-md transition-all duration-150 flex justify-center h-24 overflow-y-auto w-32 bg-gray-100 z-20`}
    >
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="border-b-2 border-slate-300 w-full cursor-pointer py-1"
              onClick={() => updateOption(option)}
            >
              {option}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
