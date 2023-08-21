import { Title } from "@/components/Title";
import { MotionOpacity } from "@/components/Motion";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"), { ssr: false });

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
