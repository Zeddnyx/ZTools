import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import dynamic from "next/dynamic";
const TodoList= dynamic(() => import("./TodoList"), { ssr: false });

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
