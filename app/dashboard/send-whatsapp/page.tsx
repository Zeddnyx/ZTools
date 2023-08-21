"use client";
import { useState } from "react";
import Input from "@/components/Input";
import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";

export default function page() {
  const [input, setInput] = useState("");
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="Send Whatsapp"
          highlight="without save number"
          desc="Just simply put number and you ready to go"
        />
        <form className="w-full h-full flex flex-col gap-5 items-center">
          <Input
            label="Number"
            name="Send Whatsapp"
            placeholder="62555666777"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn bg-light1 h-12 w-full">
            <a href={`https://wa.me/${input}`}>send</a>
          </button>
        </form>
      </div>
    </MotionOpacity>
  );
}
