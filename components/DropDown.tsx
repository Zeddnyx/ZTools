"use client";
import { memo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps {
  data: string[];
  select: string;
  setSelect: any;
  legend: string;
  disabled?: boolean;
}

function Dropdown({
  data,
  select,
  setSelect,
  legend,
  disabled = false,
}: DropdownProps) {
  const [isActive, setIsActive] = useState(false);

  const handeSelect = (e: string) => {
    setSelect(e);
    disabled ? setIsActive(false) : setIsActive((prev) => !prev);
  };
  
  const handleActive = () => {
    disabled ? setIsActive(false) : setIsActive((prev) => !prev);
  }

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="dropdown">
        <div
          className="flexBetweenCenter w-full"
          onClick={handleActive}
        >
          <button>{select}</button>
          <i className={isActive ? "rotate-180 transition-all ease-in" : ""}>
            <IoIosArrowDown />
          </i>
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
