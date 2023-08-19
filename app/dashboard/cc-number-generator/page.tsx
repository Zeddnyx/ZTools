import { Title } from "@/components/Title";
import { MotionOpacity } from "@/components/Motion";
import Form from "./Form";

export default function page() {
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="Credit Card Number Generator"
          highlight="for Testing"
          desc="Generate random test credit card and card numbers for testing, validation and verification purposes."
        />
        <div className="w-full flex justify-center flex-col">
          <Form />
        </div>
      </div>
    </MotionOpacity>
  );
}
