import { MotionOpacity } from "@/components/Motion";
import Calculator from "./Calculator";

export default function Home() {

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <div>
          <h1>
            Calculator Tool: Perform Basic Math Operations{" "}
            <span className="text-aqua">Quickly and Easily</span>
          </h1>
          <p className="descCenter">
            This tool performs basic math operations quickly and easily. It's
            useful for anyone who needs to perform quick calculations without
            having to use a physical calculator.
          </p>
        </div>
        <div className="calculator">
          <Calculator />
        </div>
      </div>
    </MotionOpacity>
  );
}
