"use client";
import { useState } from "react";
import { FiDelete } from "react-icons/fi"

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e: any) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="result">
        <input className="result-input" type="text" value={result} readOnly />
      </div>

      <div className="keypad">
        <button className="btn-calc-del" onClick={handleClear} id="clear">
          C
        </button>
        <span></span>
        <span></span>
        <span></span>
        <button className="btn-calc" name="1" onClick={handleClick}>
          1
        </button>
        <button className="btn-calc" name="2" onClick={handleClick}>
          2
        </button>
        <button className="btn-calc" name="3" onClick={handleClick}>
          3
        </button>
        <button className="btn-calc" name="+" onClick={handleClick}>
          +
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
        <button className="btn-calc" name="-" onClick={handleClick}>
          -
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
        <button className="btn-calc" name="*" onClick={handleClick}>
          *
        </button>
        <button className="btn-calc-del" onClick={handleDelete}>
          <FiDelete />
        </button>
        <button className="btn-calc" name="0" onClick={handleClick}>
          0
        </button>
        <button className="btn-calc" onClick={calculate} id="equal">
          =
        </button>
        <button className="btn-calc" name="/" onClick={handleClick}>
          /
        </button>
      </div>
    </>
  );
}
