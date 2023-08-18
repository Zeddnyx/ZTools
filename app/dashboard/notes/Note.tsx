"use client";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

import { MenuTop } from "@/components/Notes/MenuTop";
import { useStoreApp } from "@/store/useStoreApp";

export const Note = () => {
  const { notes } = useStoreApp();

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-wrap justify-center items-center gap-5">
        {notes &&
          notes.map((note, id) => (
            <div
              key={id}
              className="p-1 h-52 w-48 md:w-60 relative rounded"
              style={{ backgroundColor: note.bg }}
            >
              <span className="flex justify-between items-center mb-4 gap-5">
                <Link href={`dashboard/notes/view/${id}`}>
                  <h4>{note.title}</h4>
                </Link>
                <MenuTop
                  bg={note.bg}
                  id={id}
                  title={note.title}
                  body={note.body}
                />
              </span>
              <Link href={`dashboard/notes/view/${id}`}>
                <p className="line-clamp-6 font-medium">{note.body}</p>
              </Link>
            </div>
          ))}
      </div>
      <div className="fixed bottom-5 left-[70%]">
        <button className="hover:rotate-90 transition-all ease-in  h-12 w-12 bg-dark1 rounded-md flex justify-center items-center hover:text-aqua">
          <Link href={"/dashboard/notes/new"}>
            <IoMdAdd size={38} />
          </Link>
        </button>
      </div>
    </div>
  );
};
