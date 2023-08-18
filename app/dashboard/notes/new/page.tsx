"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/Input";
import { MenuBottom } from "@/components/Notes/MenuBottom";
import { useStoreApp } from "@/store/useStoreApp";
import { ButtonBack } from "@/components/Notes/ButtonBack";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const { setNotes } = useStoreApp();
  const [input, setInput] = useState({
    title: "",
    body: "",
    bg: "#504945",
  });

  const router = useRouter();
  const handleSave = () => {
    setNotes(input.title, input.body, input.bg);
    router.push("/dashboard/notes");
  };

  return (
    <MotionOpacity>
      <div
        className="flexCenterMargin p-2 rounded"
      >
        <ButtonBack />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          label="Notes"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <textarea
          className="bg-transparent focus:outline-none focus:ring-0 resize-none w-full"
          placeholder="Note"
          rows={10}
          cols={50}
          value={input.body}
          onChange={(e) => setInput({ ...input, body: e.target.value })}
        ></textarea>
        <div className="w-full">
          <MenuBottom
            color={color}
            select={input.bg}
            setColor={(e) => setInput({ ...input, bg: e })}
            handleSave={() => handleSave()}
          />
        </div>
      </div>
    </MotionOpacity>
  );
}

const color = [
  "#504945",
  "#bdae93",
  "#b8bb26",
  "#83a598",
  "#8ec07c",
  "#fb4934",
];
