import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import Words from "./Words";

export default function page() {
  return (
    <>
        <MotionOpacity>
        <section className="flexCenterMargin">
            <Title
            title="Count"
            highlight="How Many Words You Type"
            />
        </section>
        </MotionOpacity>
        <Words />
    </>
  );
}