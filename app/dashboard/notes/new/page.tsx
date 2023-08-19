"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useStoreApp } from "@/store/useStoreApp";
import { MotionOpacity } from "@/components/Motion";
import { Form } from "@/components/Notes/Form";

export default function page() {
  const { setNotes } = useStoreApp();
  const [input, setInput] = useState({
    title: "",
    body: "",
    bg: "#504945",
  });

  const router = useRouter();
  const handleSave = () => {
    setNotes(input.title, input.body, input.bg);
    input.title == "" && input.body == "" && input.bg == "#504945"
      ? null
      : router.push("/dashboard/notes");
  };

  return (
    <MotionOpacity>
      <Form
        title={input.title}
        body={input.body}
        bg={input.bg}
        input={input}
        setInput={setInput}
        handleClick={handleSave}
      />
    </MotionOpacity>
  );
}
