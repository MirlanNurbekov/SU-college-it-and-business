import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-blue-800 text-2xl  border-b-4 border-blue-800"
    : "text-[#000000] text-xl";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-black hover:font-bold  ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
