import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
  id: number;
  title: string;
};

type TodoStore = {
  todos: Todo[];
  setTodos: (title: string) => void;
  deleteTodos: (id: number) => void;
  editTodos: (id: number, newTitle: string) => void;
};

export const useStore = create(
  persist<TodoStore>(
    (set) => ({
      todos: [],
      setTodos: (title: any) => {
        set((state: any) => ({
          todos: [...state.todos, { id: Date.now(), title }],
        }));
      },
      deleteTodos: (id: number) => {
        set((state: any) => ({
          todos: state.todos.filter((todo: Todo) => todo?.id !== id),
        }));
      },
      editTodos: (id: number, newTitle: string) => {
        set((state: any) => ({
          todos: state.todos.map((todo: Todo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo
          ),
        }));
      },
    }),
    { name: "storage" }
  )
);
