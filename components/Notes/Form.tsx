import { memo } from "react";
import { useParams } from "next/navigation";

import { MenuBottom } from "@/components/Notes/MenuBottom";
import { ButtonBack } from "@/components/Notes/ButtonBack";
import { MenuTop } from "./MenuTop";

type TForm = {
  title: string;
  body: string;
  bg: string;
  input: any;
  setInput: (item: any) => void;
  handleClick: () => void;
};

export const Form = memo(
  ({ title, body, bg, input, setInput, handleClick }: TForm) => {

    const params = useParams();
    const id = Number(params?.id)

    return (
      <div className="flexCenterMargin p-2 rounded">
        <ButtonBack handleSave={() => handleClick()} />
        <div className="flexBetweenCenter w-full">
          <input 
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            className="font-bold text-2xl"
          />
          <MenuTop id={id} />
        </div>
        <textarea
          className="bg-transparent focus:outline-none focus:ring-0 resize-none w-full h-screen"
          placeholder="Note"
          rows={10}
          cols={200}
          value={body}
          onChange={(e) => setInput({ ...input, body: e.target.value })}
        ></textarea>
        <div className="w-full">
          <MenuBottom
            color={color}
            select={bg}
            setColor={(e) => setInput({ ...input, bg: e })}
            handleSave={() => handleClick()}
          />
        </div>
      </div>
    );
  },
);

const color = [
  "#504945",
  "#458588",
  "#98971a",
  "#689d6a",
  "#fb4934",
];
