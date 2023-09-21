import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import ColorPreview from "./ColorPreview";

export default function Pages() {
  return (
    <>
      <MotionOpacity>
        <section className="flexCenterMargin">
          <Title
            title="Color Preview"
            desc="Translate your hex/rgb/hsl code to actual colors"
            highlight="Generator"
          />
        </section>
      </MotionOpacity>
      <ColorPreview />
    </>
  );
}
