import { MotionOpacity } from "@/components/Motion";
import Password from "./Password";

export default function page() {
  return (
    <MotionOpacity>
      <section className="flexCenterMargin">
        <div>
          <h1>Password Generator: Create{" "}
            <span className="text-aqua">
              Strong and Secure Password
            </span>
          </h1>
          <p className="descCenter">
            This tools generates strong and secure passwords that are difficult
            to crack
          </p>
        </div>
        <Password />
      </section>
    </MotionOpacity>
  );
}
