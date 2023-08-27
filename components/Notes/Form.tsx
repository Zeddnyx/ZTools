import { memo } from "react";
import { MenuBottom } from "@/components/Notes/MenuBottom";
import { ButtonBack } from "@/components/Notes/ButtonBack";
import Input from "@/components/Input";

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
    return (
      <div className="flexCenterMargin p-2 rounded">
        <ButtonBack />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          label="Notes"
          value={title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <textarea
          className="bg-transparent focus:outline-none focus:ring-0 resize-none w-full h-full"
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
  "#bdae93",
  "#b8bb26",
  "#83a598",
  "#8ec07c",
  "#fb4934",
];
