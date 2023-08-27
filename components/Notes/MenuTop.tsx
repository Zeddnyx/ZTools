"use client";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { useStoreApp } from "@/store/useStoreApp";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

export const MenuTop = ({
  bg,
  id,
  idItem,
}: {
  bg: string;
  id: number;
  idItem: number;
}) => {
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

      {isActive && (
        <div className="absolute top-6 right-2 shadow-md rounded bg-dark1 transition-all ease-in">
          <div className={`${bg} px-4 py-4 space-y-6`}>
            <button className="text-red" onClick={() => handleDelete(id)}>
              <MdDeleteOutline />
            </button>
            <button
              className="text-yellow"
              onClick={() => handleEdit(idItem)}
            >
              <AiOutlineEdit />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
