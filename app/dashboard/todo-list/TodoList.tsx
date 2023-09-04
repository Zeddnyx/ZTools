"use client";
import React, { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

import Input from "@/components/Input";
import { useStoreApp } from "@/store/useStoreApp";
import { DoneList } from "./DoneList";
import { ButtonAdd } from "@/components/ButtonAdd";

export default function TodoList() {
  const { todos, deleteTodos, editTodos, setTodos, doneTodos, setDoneTodos } =
    useStoreApp();
  typeof window != "undefined";

  const [isAdd, setIsAdd] = useState(false);
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
    setIsAdd((prev) => !prev);
    if (!!editTitle) {
      setTodos(editTitle);
      setEditTitle("");
    }
  };
  const handleAdd = () => {
    setIsAdd((prev) => !prev);
  };

  const handleDone = (item: any) => {
    setDoneTodos(item.title, item.id);
    deleteTodos(item.id);
  };

  return (
    <>
      {/* count todo*/}
      {todos.length != 0 && <h5>you have {todos.length} to do list</h5>}

      <div className="w-full">
        {todos.map((todo: any) => (
          <div key={todo.id} className="flex gap-5 w-full">
            {editId === todo.id ? (
              <div className="flexColCenter w-full gap-2">
                <Input
                  label="Edit Todo"
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
              <div className="w-full">
                <div className="mt-2 w-full flexBetweenCenter gap-16 my-2 bg-dark1 p-2 rounded">
                  {/* shows todos */}
                  <p>{todo.title}</p>

                  {/* action todos */}
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => handleDone(todo)}
                      className="btn-done h-10"
                    >
                      <MdOutlineDone />
                    </button>
                    <button
                      onClick={() => handleEdit(todo.id, todo.title)}
                      className="btn-edit h-10"
                    >
                      <AiOutlineEdit />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isAdd ? (
        <div className="flexColCenter gap-2 w-full">
          <Input
            label="Todo List"
            name="Todo List"
            placeholder="Type your todo here..."
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="flex w-full gap-4">
            <button onClick={handleAddTodo} className="btn-normal">
              Add Todo
            </button>
            <button onClick={handleAdd} className="todo-add-cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <ButtonAdd isRoutes={false} href="" onClick={handleAdd} />
      )}

      {/* Done todos */}
      <div className="flex justify-start w-full">
        <DoneList item={doneTodos} />
      </div>
    </>
  );
}
