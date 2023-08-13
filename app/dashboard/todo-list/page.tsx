import { MotionOpacity } from "@/components/Motion";
import TodoList from "./TodoList"

const TodoListPage = () => {

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <div>
          <h1>To-Do List Manager: Organize Your Tasks and{" "}
          <span className="text-aqua">Stay Productive</span>
          </h1>
        </div>
        <TodoList />
      </div>
    </MotionOpacity>
  );
};

export default TodoListPage;
