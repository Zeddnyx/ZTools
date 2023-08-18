"use client";
import dynamic from "next/dynamic";
const Notes = dynamic(() => import("./Notes"), { ssr: false });

export default function page() {
  return (
    <div className="flexCenterMargin h-full">
      <div>
        <h1>
          Note App: Keep <span className="text-aqua">Your Notes</span>
        </h1>
      </div>
      <Notes />
    </div>
  );
}
