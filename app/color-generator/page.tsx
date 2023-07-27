"use client";
import React, { useState } from "react";

export default function page() {
  const [color, setColor] = useState<string[]>(["fbf1c7"]);
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
          ? (newColor += "0")
          : (newColor += randomValue);
      }
      newColors.push(newColor);
    }
    setColor(newColors);
    console.log(color);
  };

  return (
    <div className="flexCenterMargin">
      <div>
        <h1>
          Color Generator : Create{" "}
          <span className="text-aqua">Quickly and Easily</span>
        </h1>
      </div>
      <div className="w-full flex justify-center flex-col">
        {color?.map((item, id) => {
          return (
            <div key={id}>
              <div className={`h-20 w-full bg-[${item}]`}>
                <h5>{item}</h5>
              </div>
            </div>
          );
        })}

        <button className="btn h-10 px-4 " onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </div>
  );
}
