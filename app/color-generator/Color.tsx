"use client";
import React, { useState } from "react";
import Copy from "@/components/CopyText";

export default function Color() {
  const [color, setColor] = useState<string[]>([
    "#FBF1C7",
    "#0D8F4E",
    "#50900E",
    "#50009D",
    "#00607A",
  ]);
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
  return (
    <>
          {color?.map((item, id) => {
            return (
              <div
                key={id}
                className="h-20 w-full relative"
                style={{ backgroundColor: item }}
              >
                <div className="bottom-1 left-1 absolute flex gap-2 items-center">
                  <h5>{item}</h5>
                  <Copy copy={item} />
                </div>
              </div>
            );
          })}

          <button
            className="bg-light0 text-dark0 font-semibold rounded h-10 px-4 mt-10"
            onClick={handleGenerate}
          >
            Generate
          </button>
    </>
  )
}
