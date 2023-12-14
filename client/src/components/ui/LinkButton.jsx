import React from "react";

function LinkButton(props) {
  return (
    <button className="text-black/70 text-sm font-normal">
      {props.children}
    </button>
  );
}

export default LinkButton;
