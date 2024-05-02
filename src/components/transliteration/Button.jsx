import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Button;
