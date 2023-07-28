import React from "react";
import Location from "@/components/Location";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  return (
    <MotionOpacity>
      <div>
        <Location />
        page
      </div>
    </MotionOpacity>
  );
}
