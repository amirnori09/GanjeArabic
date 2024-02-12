import React from "react";

function Btn({ className, disabled, text, handler }) {
  return (
    <button
      onClick={handler}
      className={`btn bg-primary_custom w-full text-white_custom hover:bg-primary_custom/90 rounded-md ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Btn;
