import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-purple-500 text-2xl  border-b-4 border-purple-700"
    : "text-[#ADB7BE] text-xl " ;
    
    

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white hover:font-bold  ${buttonClasses} `}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;