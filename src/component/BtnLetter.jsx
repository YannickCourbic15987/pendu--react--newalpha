import React from "react";

function BtnLetter(props) {
  return (
    <button
      onClick={(e) => {
        props.letterValue(props.alpha);
        e.preventDefault();
        e.target.disabled = true;
      }}
    >
      {props.alpha}
    </button>
  );
}

export default BtnLetter;
