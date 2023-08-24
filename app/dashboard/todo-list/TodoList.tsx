"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useStoreApp } from "@/store/useStoreApp";

export default function TodoList() {
  const { todos, deleteTodos, editTodos, setTodos } = useStoreApp();

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
  return (
    <>
      {/* count todo*/}
      {!!todos && <h5>you have {todos.length} to do list</h5>}

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
                  <p>{todo.title}</p>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => handleEdit(todo.id, todo.title)}
                      className="btn-edit h-10"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => deleteTodos(todo.id)}
                      className="btn-delete h-10"
                    >
                      <MdDeleteOutline />
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
        <div className="todo-add-container">
          <button onClick={handleAdd} className="note-add">
              <IoMdAdd size={38} />
          </button>
        </div>
      )}
    </>
  );
}
