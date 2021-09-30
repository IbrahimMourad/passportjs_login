import React from "react";

const input = ({ type, placeholder, handleOnChange }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={handleOnChange} />
    </>
  );
};

export default input;
