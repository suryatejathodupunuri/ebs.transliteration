import React from "react";

const InputTextarea = ({ onChange }) => {
  return (
    <textarea
      className="h-60 w-1/2 border-black border rounded border-double p-4" 
      onChange={onChange}
    ></textarea>
  );
};

export default InputTextarea;
