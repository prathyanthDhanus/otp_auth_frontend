import React from "react";

const CustomInputField = ({ type, placeholder, title, label, value, onChange, name, className }) => {
  return (
    <div className="flex flex-col">
     
      {label && <label  className="mb-2 text-md open-sans-custom text-sm">{label}</label>}
      
      <input
        type={type}
        placeholder={placeholder}
        title={title}
        name={name}
        value={value} 
        onChange={onChange} 
        className={`p-3 border rounded-md focus:outline-none focus:border-yellow-500  ${className}`} 
      />
    </div>
  );
};

export default CustomInputField;
