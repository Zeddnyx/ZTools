"use client";
import { memo, useState } from "react";

interface DropdownProps {
  data: string[];
  select: string;
  setSelect: any;
  legend: string;
}

function Dropdown({
  data,
  select,
  setSelect,
  legend,
}: DropdownProps) {
  const [isActive, setIsActive] = useState(false);
  console.log("dropdown active");

  const handeSelect = (e: string) => {
    setSelect(e);
    setIsActive((prev) => !prev);
  };

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="dropdown">
        <div>
          <button onClick={() => setIsActive(!isActive)}>{select}</button>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {data.map((item) => (
              <div
                key={item}
                className="dropdown-item"
                onClick={() => handeSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
}
export default memo(Dropdown);
