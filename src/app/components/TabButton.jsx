import React from "react";

const TabButton = ({ children, active, selectTab }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB&BE] border-purple-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
