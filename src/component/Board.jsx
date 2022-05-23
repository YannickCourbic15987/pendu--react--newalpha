import React, { useState } from "react";
import BtnLetter from "./BtnLetter";

function Board() {
  const [btnAlpha, setBtnAlpha] = useState("");
  const letters = "azertyuiopqsdfghjklmwxcvbn";
  const letter = letters.split("");

  const letterValue = (letter) => {
    setBtnAlpha(letter);
  };
  console.log(btnAlpha);
  //récup alpha
  return (
    <div>
      {letter.map((alpha, id) => {
        return <BtnLetter alpha={alpha} key={id} letterValue={letterValue} />;
      })}
    </div>
  );
}

export default Board;
