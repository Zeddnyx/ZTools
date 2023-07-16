"use client"
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');

  const handleClick = (e:any) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />

      <div className="keypad">
        <button onClick={clear} id="clear">
          Clear
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button onClick={calculate} id="equal">
          =
        </button>
      </div>
    </div>
  );
}
