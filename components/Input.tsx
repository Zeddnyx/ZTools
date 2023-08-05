"use client";
import { memo } from "react";

interface Props {
  label: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
}

function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  disable = false,
}: Props) {
  console.log("input");

  return (
    <fieldset>
      <legend>{label}</legend>
      <input
        className="text-sm p-1 "
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
      />
    </fieldset>
  );
}
export default memo(Input);
