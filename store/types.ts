
export type TTodo = {
  id: number;
  title: string;
};

export type TNote = {
  id: number;
  title: string;
  note: string;
  bg?: string;
};

export type TStore = {
  todos: TTodo[];
  setTodos: (title: string) => void;
  deleteTodos: (id: number) => void;
  editTodos: (id: number, newTitle: string) => void;
};
