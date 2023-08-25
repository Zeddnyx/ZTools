"use client";
import { shallow } from "zustand/shallow";
import { useStore } from "./useStore";

export const useStoreApp = () => {
  const [
    todos,
    setTodos,
    deleteTodos,
    editTodos,
    doneTodos,
    setDoneTodos,
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
      state.doneTodos,
      state.setDoneTodos,
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
    doneTodos,
    setDoneTodos,
    notes,
    setNotes,
    editNotes,
    deleteNotes,
  };
};
