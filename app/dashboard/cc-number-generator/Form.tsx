"use client";
import { useState } from "react";
import { binValidator } from "@/components/cc-generator/binValidator";
import {
  monthRandom,
  yearRandom,
  month,
  year,
} from "@/components/cc-generator/dateGenerator";
import { cvvGenerator } from "@/components/cc-generator/cvvGenerator";
import { Copy } from "@/components/CopyText";
import Input from "@/components/Input";
import Dropdown from "@/components/DropDown";
import { ValidationResult } from "./ValidationResult";

export default function CCGEN() {
  const [dateStatus, setDateStats] = useState(false);
  const [cvvStatus, setCvvStats] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [form, setForm] = useState({
    bin: "",
    month: "Random",
    year: "Random",
    dateStatus,
    cvvStatus,
    cvv: 0,
    quantity: 10,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const statusTrue = dateStatus && cvvStatus;
    const statusFalse = !dateStatus && !cvvStatus;
    const trueAndFalse = dateStatus && !cvvStatus;
    const falseAndTrue = !dateStatus && cvvStatus;
    const dateRandom = form.month === "Random" && form.year == "Random";
    const dateNotRandom = form.month != "Random" && form.year != "Random";
    const dateTrueFalse = form.month === "Random" && form.year != "Random";
    const dateFalseTrue = form.month != "Random" && form.year === "Random";
    ValidationResult({
      form,
      setResults,
      statusTrue,
      statusFalse,
      dateTrueFalse,
      dateFalseTrue,
      dateNotRandom,
      dateRandom,
      month,
      year,
      monthRandom,
      yearRandom,
      cvvGenerator,
      binValidator,
      falseAndTrue,
      trueAndFalse,
    });
  };

  return (
    <div className="grid gap-1">
      <Input
        label="BIN"
        type="number"
        onChange={handleInput}
        name="bin"
        placeholder="454393"
      />

      <div className="flex gap-3">
        <div className="flex w-48 items-center">
          <input
            onClick={() => setDateStats(!dateStatus)}
            className="check bg-red"
            type="checkbox"
            name="date"
          />
          <label className="label" htmlFor="date">
            DATE
          </label>
        </div>

        <Dropdown
          legend="MONTH"
          select={form.month}
          data={month}
          setSelect={(e: string) => {
            setForm((prev) => ({
              ...prev,
              month: e,
            }));
          }}
        />

        <Dropdown
          legend="YEAR"
          select={form.year}
          setSelect={(e: string) => {
            setForm((prev) => ({
              ...prev,
              year: e,
            }));
          }}
          data={year}
        />
      </div>

      <div className="flex gap-5 items-center ">
        <div className="flex w-48 items-center">
          <input
            onClick={() => setCvvStats(!cvvStatus)}
            type="checkbox"
            name="cvvStatus"
          />
          <label className="label" htmlFor="cvvStatus">
            CVV
          </label>
        </div>

        <Input
          label="CVV"
          type="number"
          onChange={handleInput}
          name="cvv"
          placeholder="Leave blank to random"
        />

        <Input
          label="QUANTITY"
          type="number"
          onChange={handleInput}
          name="quantity"
          placeholder="10"
        />
      </div>

      <button onClick={handleClick} className="btn mt-5 bg-light1 py-2">
        Generate
      </button>

      <fieldset className="mt-10 ">
        <legend>RESULT</legend>
        <div>
          <div className="overflow-scroll h-36 text-xs">
            {results.map((list, id) => (
              <p key={id}>{list}</p>
            ))}
          </div>
          <Copy copy={results} />
        </div>
      </fieldset>
    </div>
  );
}
