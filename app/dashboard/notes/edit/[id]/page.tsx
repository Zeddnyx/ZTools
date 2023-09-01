"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { useStoreApp } from "@/store/useStoreApp";
import { MotionOpacity } from "@/components/Motion";
import { Form } from "@/components/Notes/Form";

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
    editNotes(note.id, edit.title, edit.body, edit.bg);
    edit.title == "" && edit.body == ""
      ? null
      : router.push(`/dashboard/notes`);
  };

  return (
    <MotionOpacity>
      <Form
        title={edit.title}
        body={edit.body}
        bg={edit.bg}
        input={edit}
        setInput={setEdit}
        handleClick={handleEdit}
      />
    </MotionOpacity>
  );
}
