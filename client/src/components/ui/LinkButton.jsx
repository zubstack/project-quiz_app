import React from "react";

function LinkButton(props) {
  return (
    <button className="text-black/70 text-sm font-normal hover:text-black">
      {props.children}
    </button>
  );
}

export default LinkButton;
