interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  value: string| number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <fieldset>
      <legend>{name}</legend>
      <input
        className="text-sm p-1 "
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}
