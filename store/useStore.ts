import { TStore, TTodo} from "./types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useStore = create(
  persist<TStore>(
    (set) => ({
      todos: [],
      setTodos: (title: any) => {
        set((state: any) => ({
          todos: [...state.todos, { id: Date.now(), title }],
        }));
      },
      deleteTodos: (id: number) => {
        set((state: any) => ({
          todos: state.todos.filter((todo: TTodo) => todo?.id !== id),
        }));
      },
      editTodos: (id: number, newTitle: string) => {
        set((state: any) => ({
          todos: state.todos.map((todo: TTodo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo,
          ),
        }));
      },

    }),
    { name: "storage" },
  ),
);
