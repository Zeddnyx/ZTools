import { MotionOpacity } from "@/components/Motion";
import Password from "./Password";
import { Title } from "@/components/Title";

export default function page() {
  return (
    <MotionOpacity>
      <section className="flexCenterMargin">
        <Title
          title="Password Generator"
          highlight="Create Strong Password"
        />
        <Password />
      </section>
    </MotionOpacity>
  );
}
