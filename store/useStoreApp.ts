"use client";
import { shallow } from "zustand/shallow";
import { useStore } from "./useStore";

export const useStoreApp = () => {
  const [
    todos,
    setTodos,
    deleteTodos,
    editTodos,
    notes,
    setNotes,
    editNotes,
    deleteNotes,
  ] = useStore((state) => {
    return [
      state.todos,
      state.setTodos,
      state.deleteTodos,
      state.editTodos,
      state.notes,
      state.setNotes,
      state.editNotes,
      state.deleteNotes,
    ];
  }, shallow);

  return {
    todos,
    setTodos,
    deleteTodos,
    editTodos,
    notes,
    setNotes,
    editNotes,
    deleteNotes,
  };
};
