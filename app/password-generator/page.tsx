import Location from "@/components/Location";
import { MotionOpacity } from "@/components/Motion";
import Password from "./Password";

export default function page() {
  return (
    <MotionOpacity>
      <section className="flexCenterMargin">
        <Location />
        <div>
          <h2>Password Generator: Create Strong and Secure Password</h2>
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
