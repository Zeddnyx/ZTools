"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import Input from "@/components/Input";
import { MenuBottom } from "@/components/Notes/MenuBottom";
import { useStoreApp } from "@/store/useStoreApp";
import { ButtonBack } from "@/components/Notes/ButtonBack";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const router = useRouter();
  const params = useParams();
  const { notes, editNotes } = useStoreApp();
  const id = Number(params?.id);
  const note = notes[id];
  const [edit, setEdit] = useState({
    id: note.id,
    title: note.title,
    body: note.body,
    bg: note.bg,
  });

  const handleEdit = () => {
    editNotes(note.id, edit.title, edit.body);
    router.push(`/dashboard/notes/view/${id}`);
  };

  return (
    <MotionOpacity>
      <div className="flexCenterMargin p-2 rounded">
        <ButtonBack />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          label="Notes"
          value={edit.title}
          onChange={(e) => setEdit({ ...edit, title: e.target.value })}
        />
        <textarea
          className="bg-transparent focus:outline-none focus:ring-0 resize-none w-full"
          placeholder="Note"
          rows={10}
          cols={50}
          value={edit.body}
          onChange={(e) => setEdit({ ...edit, body: e.target.value })}
        ></textarea>
        <div className="w-full">
          <MenuBottom
            color={color}
            setColor={(e) => setEdit({ ...edit, bg: e })}
            handleSave={() => handleEdit()}
          />
        </div>
      </div>
    </MotionOpacity>
  );
}

const color = [
  "#282828",
  "#504945",
  "#bdae93",
  "#b8bb26",
  "#83a598",
  "#8ec07c",
  "#fb4934",
];
