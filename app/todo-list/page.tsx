"use client";
import React, { useState, Fragment } from "react";
import { shallow } from "zustand/shallow";
import { useStore } from "@/store/stateManagement";
import Input from "@/components/Input";

const TodoList = () => {
  const [todos, setTodos, deleteTodos, editTodos] = useStore((state) => {
    return [state.todos, state.setTodos, state.deleteTodos, state.editTodos];
  }, shallow);

  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleUpdate = () => {
    if (editId !== null) {
      editTodos(editId, editTitle);
      setEditId(null);
      setEditTitle("");
    }
  };

  return (
    <div className="flexCenterMargin">
      <div className="flex items-center gap-2 w-full">
        <Input
          name="Todo List"
          placeholder="add todo"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button onClick={() => setTodos(editTitle)} className="btn-normal">
          Add Todo
        </button>
      </div>
      <ul className="w-full">
        {todos.map((todo: any) => (
          <li key={todo.id} className="flex gap-5 w-full">
            {/* {editId === todo.id ? ( */}
            {/*     <li className="flex items-center w-full gap-2"> */}
            {/*       <Input */}
            {/*         name="Edit Todo" */}
            {/*         placeholder="Edit Todo" */}
            {/*         type="text" */}
            {/*         value={editTitle} */}
            {/*         onChange={(e) => setEditTitle(e.target.value)} */}
            {/*       /> */}
            {/*       <button onClick={handleUpdate} className="btn-normal"> */}
            {/*         Update */}
            {/*       </button> */}
            {/*     </li> */}
            {/* ) : ( */}
                <div className="mt-2 w-full flex gap-16 my-2 bg-dark1 p-2 justify-between items-center">
                  <p>{todo.title}</p>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => handleEdit(todo.id, todo.title)}
                      className="btn-edit h-10"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodos(todo.id)}
                      className="btn-delete h-10"
                    >
                      Delete
                    </button>
                  </div>
                </div>

            {/* )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
