"use client";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

import { MotionOpacity } from "@/components/Motion";
import { MenuTop } from "@/components/Notes/MenuTop";
import { useStoreApp } from "@/store/useStoreApp";

export default function Notes() {
  const { notes } = useStoreApp();

  return (
    <MotionOpacity>
      <div className="note-container">
        <div className="note-list">
          {notes &&
            notes.map((note: any, id:number) => (
              <div
                key={note.id}
                className="note-item"
                style={{ backgroundColor: note.bg }}
              >
                <div className="note-item-top-menu">
                  <Link href={`/dashboard/notes/view/${id}`}>
                    <h4>{note.title}</h4>
                  </Link>
                  <MenuTop bg={note.bg} id={note.id} idItem={id} />
                </div>
                <Link href={`/dashboard/notes/view/${id}`}>
                  <p className="note-item-body">{note.body}</p>
                </Link>
              </div>
            ))}
        </div>
        <div className="note-add-container">
          <button className="note-add">
            <Link href={"/dashboard/notes/new"}>
              <IoMdAdd size={38} />
            </Link>
          </button>
        </div>
      </div>
    </MotionOpacity>
  );
}
