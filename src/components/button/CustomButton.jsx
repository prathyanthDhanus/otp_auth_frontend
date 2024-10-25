import React from "react";

export const CustomButton = ({ buttonText, className, onClick,type="button"}) => {
  return (
    <div>
      <button
        className={`flex items-center border justify-center rounded-md  ${className}`}
        onClick={onClick}
        type={type}
      >
        <span className=" gap-2 p-3 ">{buttonText}</span>
      </button>
    </div>
  );
};

export default CustomButton;