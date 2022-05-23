import React from "react";

function Mask(props) {
  const masked = props.wordRandom;
  for (let i = 0; i < masked.length; i++) {
    masked[i] = "*";
  }

  console.log(props.wordRandom2);

  return (
    <div>
      <h1>{masked}</h1>
      <p>{props.wordRandom2}</p>
    </div>
  );
}

export default Mask;
