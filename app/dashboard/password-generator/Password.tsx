"use client";
import { Copy } from "@/components/CopyText";
import Input from "@/components/Input";
import { useState } from "react";

export default function Password() {
  const [length, setLength] = useState<number>(6);
  const [results, setResults] = useState<any>([]);

  const symbole = "!@#$%&*()=+";
  const lower = "qwertyuioplkjhgfdsazxcvbnm";
  const upper = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  const number = "1234567890";

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResults([]);

    const pw = `${symbole}${lower}${upper}${number}`;
    for (let i = 0; i < length; i++) {
      const generate = pw[~~(Math.random() * pw.length)];
      setResults((results: any) =>
        [...results, generate].toString().replace(/,/g, "")
      );
    }
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row items-center gap-3 w-full"
        onSubmit={handleGenerate}
      >
        <Input
          label="LENGTH"
          type="number"
          name="length"
          value={length}
          placeholder="6"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLength(e.target.valueAsNumber)
          }
        />

        <div className="flex gap-2 items-center w-full relative">
          <Input
            label="PASSWORD"
            type="text"
            name="password"
            value={results}
            placeholder="password"
            disable={true}
          />
          <span className="absolute top-5 right-2">

          <Copy copy={results} />
          </span>
        </div>

        <button className="btn bg-light1 w-full" type="submit">
          generate
        </button>
      </form>
    </>
  );
}
