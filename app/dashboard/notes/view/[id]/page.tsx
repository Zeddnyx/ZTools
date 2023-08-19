"use client";
import { useParams } from "next/navigation";

import { MenuTop } from "@/components/Notes/MenuTop";
import { useStoreApp } from "@/store/useStoreApp";
import { ButtonBack } from "@/components/Notes/ButtonBack";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const params = useParams();
  const { notes } = useStoreApp();
  const id = Number(params?.id)
  const note = notes[id];

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <ButtonBack />
        <div className="flexBetweenCenter w-full">
          <h1>{note.title}</h1>
          <MenuTop bg={note.bg} id={note.id} idItem={id} />
        </div>
        <p className="flex w-full">{note.body}</p>
      </div>
    </MotionOpacity>
  );
}
