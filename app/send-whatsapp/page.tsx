"use client";
import React, { useState } from "react";
import Input from "@/components/Input";

export default function page() {
  const [input, setInput] = useState("");
  return (
    <div className="flexCenterMargin">
      <div>
        <h2>send whatsapp message without save number</h2>
        <p className="descCenter">Just simply put number and you ready to go</p>
      </div>
      <form className="w-full h-full flex flex-col md:flex-row gap-5 items-center">
        <Input
          name="Send Whatsapp"
          placeholder="ex: 62555666777"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn h-12">
          <a href={`https://wa.me/${input}`} >send</a>
        </button>
      </form>
    </div>
  );
}
