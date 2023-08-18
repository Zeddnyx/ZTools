"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { IoMdAdd } from "react-icons/io";

import { MenuTop } from "@/components/Notes/MenuTop";
import { TNote } from "@/store/types";
import { db } from "@/services/firebase-config";

export const Note = () => {
  const collectionRef = collection(db, "notes");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(collectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(notes);
    };
    getNotes();
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="grid grid-cols-2 gap-5 ">
        {notes &&
          notes.map((note) => (
            <div key={note.id} className={`p-1 h-52`}>
              <div className="flex justify-between mb-4">
                <Link key={note.id} href={`dashboard/notes/view/${note.title}`}>
                  <h4>{note.title}</h4>
                </Link>
                <MenuTop />
              </div>
              <Link key={note.id} href={`dashboard/notes/view/${note.title}`}>
                <p className="line-clamp-6">{note.note}</p>
              </Link>
            </div>
          ))}
      </div>
      <div className="fixed bottom-5 left-[80%] h-20 2-20">
        <Link href={"/dashboard/notes/new"}>
          <button className="hover:rotate-90 transition-all ease-in">
            <IoMdAdd size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
};
