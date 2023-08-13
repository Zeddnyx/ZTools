import { MotionOpacity } from "@/components/Motion";
import Form from "./Form";

export default function page() {
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <div>
          <h1>Random Test Credit Card Number Generator</h1>
          <p className="descCenter">
            Generate random test credit card and card numbers for testing,
            validation and verification purposes.
          </p>
        </div>
        <div className="w-full flex justify-center flex-col">
          <Form />
        </div>
      </div>
    </MotionOpacity>
  );
}
