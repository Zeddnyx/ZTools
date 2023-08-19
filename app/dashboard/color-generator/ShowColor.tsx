"use client";
import { memo } from "react";
import { Copy } from "@/components/CopyText";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  color?: string[];
  saved?: string[];
  setSaved: React.Dispatch<React.SetStateAction<string[]>>;
  isShow?: boolean;
}

export const ShowColor = memo(
  ({ color, saved, setSaved, isShow = false }: Props) => {
    const handleDeletSaved = (id: number) => {
      const newResult = saved!.filter((_, itemId) => itemId !== id);
      setSaved(newResult);
    };

    const show = color ? color : saved;

    return (
      <>
        {show!.map((item, id) => {
          return (
            <div key={id} className="grid">
              <div
                className="flexBetweenCenter px-2"
                style={{ backgroundColor: item }}
              >
                <div className="h-14 w-full relative flex gap-1 items-center">
                  <h5>{item}</h5>
                  <Copy copy={item} />
                </div>
                {isShow && (
                  <button onClick={() => handleDeletSaved(id)}>
                    <MdDeleteOutline size="20" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  },
);
