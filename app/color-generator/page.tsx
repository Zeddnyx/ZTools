import Location from "@/components/Location";
import { MotionOpacity } from "@/components/Motion";
import Color from "./Color";

export default function page() {

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Location />
        <div>
          <h1>
            Color Generator : Create{" "}
            <span className="text-aqua">Quickly and Easily</span>
          </h1>
          <p className="descCenter">The super fast color palettes generator!</p>
        </div>
        <div className="w-full flex justify-center flex-col">
          <Color />
        </div>
      </div>
    </MotionOpacity>
  );
}
