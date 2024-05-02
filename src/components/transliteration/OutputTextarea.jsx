import React from "react";
const OutputTextarea = ({ text }) => {
    return (
      <> 
        <textarea
          className="h-60 w-1/2 border-black border rounded border-double p-4"
          value={text}
          readOnly
        ></textarea>
      </>
    );
  };
  
  export default OutputTextarea;