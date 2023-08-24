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
  error?: string | null;
}

function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  disable = false,
  error,
}: Props) {

  return (
    <fieldset>
      <legend>{label}</legend>
      <input
        className="text-sm p-1 outline-none focus:ring-0 "
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
      />
      <span className="text-xs text-red">{error}</span>
    </fieldset>
  );
}
export default memo(Input);
