"use client";
import React, { useState } from "react";
import { ShowColor } from "./ShowColor";

export default function Color() {
  const [color, setColor] = useState<string[]>([
    "#FBF1C7",
    "#0D8F4E",
    "#50900E",
    "#50009D",
    "#00607A",
  ]);
  const [saved, setSaved] = useState<string[]>([]);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const string = ["A", "B", "C", "D", "E", "F"];

  const handleGenerate = () => {
    let newColors: string[] = [];
    for (let i = 0; i < 5; i++) {
      let newColor = "#";
      for (let index = 0; index < 6; index++) {
        const randomIndex = Math.floor(Math.random() * 16);
        const randomValue =
          index % 2 === 0 ? number[randomIndex] : string[randomIndex];
        randomValue === undefined
          ? (newColor += "A")
          : (newColor += randomValue);
      }
      newColors.push(newColor);
    }
    setColor(newColors);
  };

  const handleSaved = () => {
    setSaved([...saved, ...color]);
  };

  return (
    <>
      <ShowColor color={color} setSaved={setSaved} />

      <div className="flex gap-4 mt-4">
        <button className="btn bg-light1 w-full" onClick={handleGenerate}>
          Generate
        </button>
        <button className="btn bg-aqua_alt w-full" onClick={handleSaved}>
          Save
        </button>
      </div>

      <div className="mt-10">
        <ShowColor saved={saved} setSaved={setSaved} isShow={true} />
      </div>
    </>
  );
}
