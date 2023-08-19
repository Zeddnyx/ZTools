import { MotionOpacity } from "@/components/Motion";
import TodoList from "./TodoList";
import { Title } from "@/components/Title";

const TodoListPage = () => {
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="To-Do List Manager: Organize Your Tasks to"
          highlight="Stay Productive"
        />
        <TodoList />
      </div>
    </MotionOpacity>
  );
};

export default TodoListPage;
