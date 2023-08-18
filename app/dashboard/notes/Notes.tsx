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
      <div className="relative w-full h-full">
        <div className="flex flex-wrap justify-center items-start gap-5">
          {notes &&
            notes.map((note, id) => (
              <div
                key={note.id}
                className="p-2 h-40 w-48 md:w-60 relative rounded"
                style={{ backgroundColor: note.bg }}
              >
                <div className="flex justify-between items-center mb-4 gap-5">
                  <Link href={`/dashboard/notes/view/${id}`}>
                    <h4>{note.title}</h4>
                  </Link>
                  <MenuTop bg={note.bg} id={note.id} idItem={id} />
                </div>
                <Link href={`/dashboard/notes/view/${id}`}>
                  <p className="max-h-24 overflow-hidden font-medium z-10">
                    {note.body}
                  </p>
                </Link>
              </div>
            ))}
        </div>
        <div className="fixed bottom-5 left-[74%]">
          <button className="hover:rotate-90 transition-all ease-in  h-12 w-12 bg-dark1 rounded-md flex justify-center items-center hover:text-aqua">
            <Link href={"/dashboard/notes/new"}>
              <IoMdAdd size={38} />
            </Link>
          </button>
        </div>
      </div>
    </MotionOpacity>
  );
}
