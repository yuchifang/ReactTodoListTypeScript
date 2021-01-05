import React from "react";
const DrinkInput = ({
  placeholderText,
  InputValue,
  setValue,
  setClassName
}) => (
  <input
    className={setClassName}
    placeholder={placeholderText}
    type="text"
    value={InputValue}
    onChange={setValue}
  />
);
export default DrinkInput;
