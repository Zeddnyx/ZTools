"use client";
import React, { useState } from "react";
import { shallow } from "zustand/shallow";
import { useStore } from "@/store/stateManagement";
import Input from "@/components/Input";

export default function TodoList() {
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

  const handleAddTodo = () => {
    setTodos(editTitle);
    setEditTitle("");
  };
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <Input
          name="Todo List"
          placeholder="add todo"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button onClick={handleAddTodo} className="btn-normal">
          Add Todo
        </button>
      </div>
      <div className="w-full">
        {todos.map((todo: any) => (
          <div key={todo.id} className="flex gap-5 w-full">
            {editId === todo.id ? (
              <div className="flex flex-col items-center w-full gap-2">
                <Input
                  name="Edit Todo"
                  placeholder="Edit Todo"
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={handleUpdate} className="btn-normal">
                  Update
                </button>
              </div>
            ) : (
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
            )}
          </div>
        ))}
      </div>
    </>
  );
}
