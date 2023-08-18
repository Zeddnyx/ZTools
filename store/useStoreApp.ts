"use client";
import { shallow } from "zustand/shallow";
import { useStore } from "./useStore";

export const useStoreApp = () => {
  const [todos, setTodos, deleteTodos, editTodos] = useStore((state) => {
    return [state.todos, state.setTodos, state.deleteTodos, state.editTodos];
  }, shallow);

  return {
    todos,
    setTodos,
    deleteTodos,
    editTodos,
  };
};
