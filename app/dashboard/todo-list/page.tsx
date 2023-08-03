import Location from "@/components/Location";
import { MotionOpacity } from "@/components/Motion";
import TodoList from "./TodoList"

const TodoListPage = () => {

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Location />
        <TodoList />
      </div>
    </MotionOpacity>
  );
};

export default TodoListPage;
