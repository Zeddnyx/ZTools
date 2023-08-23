"use client";
import dynamic from "next/dynamic";
import { Title } from "@/components/Title";
const Notes = dynamic(() => import("./Notes"), { ssr: false });

export default function page() {
  return (
    <div className="flexCenterMargin h-full">
      <Title title="Note App: Keep" highlight="Your Notes" />
      <Notes />
    </div>
  );
}
