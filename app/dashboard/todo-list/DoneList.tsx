"use client";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";

interface IDone {
  title: string;
  id: number;
}

export const DoneList: React.FC<{ item: IDone[] }> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  typeof window != "undefined";

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 items-start text-start">
      <button onClick={handleActive} className="flex gap-1 items-center">
        <span className={!isActive ? "rotate-0" : "rotate-180"}>
          <IoIosArrowDropdown />
        </span>
        <p>
        {item.length} Checked todo list
        </p>
      </button>

      {isActive && (
        <div className="flex justify-start flex-col gap-2">
          {item.map((item) => {
            return (
              <div key={item.id} className="bg-dark flex gap-1 items-center">
                <p>
                  <MdOutlineDone />
                </p>
                <p className="line-through text-light3">{item.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
