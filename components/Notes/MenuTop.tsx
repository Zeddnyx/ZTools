"use client";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { useStoreApp } from "@/store/useStoreApp";

export const MenuTop = ({ bg, id, idItem }: { bg: string; id: number, idItem:number }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { deleteNotes } = useStoreApp();

  const handleClick = () => {
    setIsActive((e) => !e);
  };

  const handleDelete = (id: number) => {
    deleteNotes(id);
    setIsActive(false);
    router.push(`/dashboard/notes`);
  };
  const handleEdit = (id: number) => {
    router.push(`/dashboard/notes/edit/${id}`);
  };

  return (
    <div className="relative cursor-pointer">
      <button onClick={handleClick}>
        <CiMenuKebab />
      </button>

      <div className="absolute top-6 right-2 shadow-md rounded bg-dark1">
        {isActive && (
          <div className={`${bg} p-2 space-y-2`}>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleEdit(idItem)}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};
