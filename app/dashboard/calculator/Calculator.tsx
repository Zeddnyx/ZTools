"use client";
import { KeyboardEvent, ChangeEvent, useState } from "react";
import { FiDelete } from "react-icons/fi";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [math, setMath] = useState("");
  const color = math.includes("-") ? "text-red_alt" : "text-aqua";

  const handleClick = (e: any) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
    setMath("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setMath(eval(result).toString());
    } catch (error) {
      setMath("Error");
    }
  };

  const handleResultChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  return (
    <>
      <div className="result">
        <h3>
          <input
            onChange={handleResultChange}
            onKeyDown={handleKeyDown}
            className="text-right"
            type="text"
            value={result}
          />
        </h3>
        {math && <h4 className={color}>{math}</h4>}
      </div>

      <div className="keypad">
        <button className="btn-calc-del" onClick={handleClear} id="clear">
          C
        </button>
        <span></span>
        <span></span>
        <button className="btn-math" name="+" onClick={handleClick}>
          +
        </button>
        <button className="btn-calc" name="1" onClick={handleClick}>
          1
        </button>
        <button className="btn-calc" name="2" onClick={handleClick}>
          2
        </button>
        <button className="btn-calc" name="3" onClick={handleClick}>
          3
        </button>
        <button className="btn-math" name="-" onClick={handleClick}>
          -
        </button>
        <button className="btn-calc" name="4" onClick={handleClick}>
          4
        </button>
        <button className="btn-calc" name="5" onClick={handleClick}>
          5
        </button>
        <button className="btn-calc" name="6" onClick={handleClick}>
          6
        </button>
        <button className="btn-math" name="*" onClick={handleClick}>
          x
        </button>
        <button className="btn-calc" name="7" onClick={handleClick}>
          7
        </button>
        <button className="btn-calc" name="8" onClick={handleClick}>
          8
        </button>
        <button className="btn-calc" name="9" onClick={handleClick}>
          9
        </button>
        <button className="btn-math" name="/" onClick={handleClick}>
          /
        </button>
        <button className="btn-calc" name="00" onClick={handleClick}>
          00
        </button>
        <button className="btn-calc" name="0" onClick={handleClick}>
          0
        </button>
        <button className="btn-calc-del" onClick={handleDelete}>
          <FiDelete />
        </button>
        <button className="btn-math" onClick={calculate} id="equal">
          =
        </button>
      </div>
    </>
  );
}
