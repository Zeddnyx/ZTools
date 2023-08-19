import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import Calculator from "./Calculator";

export default function Home() {
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="Calculator Tool: Perform Basic Math Operations"
          highlight="Quickly and Easily"
          desc="This tool performs basic math operations."
        />
        <div className="calculator">
          <Calculator />
        </div>
      </div>
    </MotionOpacity>
  );
}
