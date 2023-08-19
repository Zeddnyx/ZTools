import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import Color from "./Color";

export default function page() {
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="Color Generator"
          highlight="Quickly and Easily"
          desc="The super fast color palettes generator!"
        />
        <div className="w-full flex justify-center flex-col">
          <Color />
        </div>
      </div>
    </MotionOpacity>
  );
}
