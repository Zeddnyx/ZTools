"use client";
import Input from "@/components/Input"
import { MenuBottom } from "@/components/Notes/MenuBottom"
import { useState } from "react"

export default function page() {

  const [value, setValue] = useState<string>("bg-dark0")
  const [input, setInput] = useState({
    title: "",
    note: "",
    id: Date.now(),
    bg: value
  })

  return (
    <div className="flexCenterMargin" style={{ backgroundColor: value }}>
      <Input
        type="text"
        name="title"
        placeholder="Title"
        label="Notes"
        onChange={(e) => setInput({ ...input, title: e.target.value })} />
      <textarea className="bg-transparent focus:outline-none focus:ring-0 resize-none w-full"
        placeholder="Note"
        rows={10}
        cols={50}
        value={input.note}
        onChange={(e) => setInput({ ...input, note: e.target.value })}
      ></textarea>
      <div className="w-full">
        <MenuBottom color={color} setColor={setValue} />
      </div>
    </div>
  )
}

const color = [
  "#282828",
  "#504945",
  "#bdae93",
  "#b8bb26",
  "#83a598",
  "#8ec07c",
  "#fb4934"
]
