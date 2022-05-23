import React from "react";
import Mask from "./Mask";
function Word() {
  const word = [
    "automobile",
    "afci",
    "mms",
    "tortillas",
    "maid",
    "souris",
    "smartphone",
    "clavier",
    "gpu",
    "cpu",
    "ram",
    "usb",
    "tu-as-perdu",
  ];

  const index = Math.round(Math.random() * (word.length - 1));

  const wordRandom = word[index].split("");
  console.log(wordRandom);
  const wordRandomCopy = word[index].split("");

  return (
    <div>
      <Mask wordRandom={wordRandom} wordRandom2={wordRandomCopy} />
    </div>
  );
}

export default Word;
