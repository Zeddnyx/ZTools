import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { TNote } from "@/store/types";
import { useStoreApp } from "@/store/useStoreApp";

export const MenuTop = ({ bg, id, title, body }: TNote) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { deleteNotes, editNotes } = useStoreApp();

  const handleClick = () => {
    setIsActive((e) => !e);
  };

  const handleDelete = (id: number) => {
    deleteNotes(id);
  };
  const handleEdit = (item: TNote) => {
    // TODO add edit page
    //router.push(`/dashboard/notes/edit/${item.id}`);
    console.log(item);
  };

  return (
    <div className="relative">
      <i className="cursor-pointer" onClick={handleClick}>
        <CiMenuKebab />
      </i>

      <div className="absolute top-6 right-2 shadow-md rounded">
        {isActive && (
          <div className={`${bg} p-2 space-y-2`}>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleEdit({ id, title, body, bg })}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
