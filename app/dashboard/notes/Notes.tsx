"use client";
import Link from "next/link";

import { MotionOpacity } from "@/components/Motion";
import { MenuTop } from "@/components/Notes/MenuTop";
import { useStoreApp } from "@/store/useStoreApp";
import { ButtonAdd } from "@/components/ButtonAdd";

export default function Notes() {
  const { notes } = useStoreApp();

  return (
    <MotionOpacity>
      <div className="note-container">
        <div className="note-list">
          {notes &&
            notes
              .map((note: any, id: number) => (
                <div
                  key={note.id}
                  className="note-item"
                  style={{ backgroundColor: note.bg }}
                >
                  <div className="note-item-top-menu">
                    <Link href={`/dashboard/notes/edit/${id}`}>
                      <h4>{note.title}</h4>
                    </Link>
                    <MenuTop id={note.id} />
                  </div>
                  <Link href={`/dashboard/notes/edit/${id}`}>
                    <p className="note-item-body">{note.body}</p>
                  </Link>
                </div>
              ))
              .reverse()}
        </div>
        <ButtonAdd isRoutes={true} href="/dashboard/notes/new" />
      </div>
    </MotionOpacity>
  );
}
