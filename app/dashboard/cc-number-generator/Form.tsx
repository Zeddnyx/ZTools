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

export default function CCGEN() {
  const [selectMonth, setselectMonth] = useState("random")
  const [selectYear, setselectYear] = useState("random")
  const [dateStatus, setDateStats] = useState(false);
  const [cvvStatus, setCvvStats] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [form, setForm] = useState({
    bin: "",
    dateStatus,
    month: selectMonth,
    year: selectYear,
    cvvStatus,
    cvv: 0,
    quantity: 10,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // when input field is change
    // every change will be store to state form
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
    const dateRandom = form.month === "random" && form.year == "random";
    const dateNotRandom = form.month != "random" && form.year != "random";
    const dateTrueFalse = form.month === "random" && form.year != "random";
    const dateFalseTrue = form.month != "random" && form.year === "random";

    let i = 0;

    // show bin, cvv not random
    if (falseAndTrue && form.cvv !== 0) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.cvv}`,
        ]);
        i++;
      }
    }
    // show bin, cvv random
    if (falseAndTrue && form.cvv === 0) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${cvvGenerator()}`,
        ]);
        i++;
      }
    }
    // show bin, cvv = blank dan month = random, year not random
    if (statusTrue && form.cvv === 0 && dateTrueFalse) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${form.year
          }|${cvvGenerator()}`,
        ]);
        i++;
      }
    }
    // show bin, cvv = blank, month not random, year random
    if (statusTrue && form.cvv === 0 && dateFalseTrue) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${yearRandom(
            year
          )}|${cvvGenerator()}`,
        ]);
        i++;
      }
    }
    // show bin, cvv = blank, month not random, year not random
    if (statusTrue && form.cvv === 0 && dateNotRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${form.year
          }|${cvvGenerator()}`,
        ]);
        i++;
      }
    }
    // show bin, cvv = blank, month random, year random
    if (statusTrue && form.cvv === 0 && dateRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(
            year
          )}|${cvvGenerator()}`,
        ]);
        i++;
      }
    }
    // show bin, cvv not random, month random, year random
    if (statusTrue && form.cvv !== 0 && dateRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(
            year
          )}|${form.cvv}`,
        ]);
        i++;
      }
    }
    // show bin, cvv not random, month not random, year not random
    if (statusTrue && form.cvv !== 0 && dateNotRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${form.year}|${form.cvv}`,
        ]);
        i++;
      }
    }
    // show bin, cvv not random, month not random, year random
    if (statusTrue && form.cvv !== 0 && dateFalseTrue) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${yearRandom(year)}|${form.cvv
          }`,
        ]);
        i++;
      }
    }
    // show bin, cvv not random, month random, year not random
    if (statusTrue && form.cvv !== 0 && dateTrueFalse) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${form.year}|${form.cvv
          }`,
        ]);
        i++;
      }
    }

    // show bin, month random, year not random
    if (trueAndFalse && dateTrueFalse) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${form.year}`,
        ]);
        i++;
      }
    }
    // show bin, month not random, year random
    if (trueAndFalse && dateFalseTrue) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${yearRandom(year)}`,
        ]);
        i++;
      }
    }
    // show bin, month random, year random
    if (trueAndFalse && dateRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(year)}`,
        ]);
        i++;
      }
    }
    // show bin, month not random, year not random
    if (trueAndFalse && dateNotRandom) {
      while (i < form.quantity) {
        setResults((results) => [
          ...results,
          `${binValidator(form.bin)}|${form.month}|${form.year}`,
        ]);
        i++;
      }
    }
    if (statusFalse) {
      while (i < form.quantity) {
        setResults((results) => [...results, binValidator(form.bin)]);
        i++;
      }
    }
  };

  return (
    <>
      <form className="grid gap-2 mt-16">
        <Input
          label="BIN"
          type="number"
          onChange={handleInput}
          name="bin"
          placeholder="454393"
        />

        <div className="flex gap-3">
          <div className="flex w-full items-center">
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
            select={selectMonth}
            setSelect={handleInput}
            data={month}
          />

          <Dropdown
            legend="YEAR"
            select={selectYear}
            setSelect={handleInput}
            data={year}
          />
        </div>

        <div className="flex gap-5 items-center ">
          <div className="flex w-full items-center text-start">
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

        <button onClick={handleClick} className="btn py-2">
          Generate
        </button>
      </form>

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
    </>
  );
}
