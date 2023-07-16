"use client";
import { useState } from "react";
import Input from "@/components/Input";

export default function page() {
  const [length, setLength] = useState<number>(6);
  const [results, setResults] = useState<any>([]);

  const symbole = "!@#$%&*()=+";
  const lower = "qwertyuioplkjhgfdsazxcvbnm";
  const upper = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  const number = "1234567890";

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pw = `${symbole}${lower}${upper}${number}`;
    for (let i = 0; i < length; i++) {
      const generate = pw[~~(Math.random() * pw.length)];
      setResults((results: any) =>
        [...results, generate].toString().replace(/,/g, "")
      );
    }
  };

  return (
    <section className="flexCenterMargin">
      <div>
        <h2>Password Generator: Create Strong and Secure Password</h2>
        <p className="descCenter">
          This tools generates strong and secure passwords that are difficult to
          crack
        </p>
      </div>
      <form className="flex flex-col md:flex-row items-center gap-3 w-full" onSubmit={handleGenerate}>
        <Input
          type="number"
          name="length"
          value={length}
          placeholder="6"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLength(e.target.valueAsNumber)
          }
        />

        <fieldset>
          <legend>Password</legend>
          <input className="input" type="text" readOnly value={results} />
        </fieldset>

        <button className="btn h-10" type="submit">
          generate
        </button>
      </form>
    </section>
  );
}
