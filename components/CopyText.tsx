import { memo, useCallback } from "react";
import { FaCopy } from "react-icons/fa";

interface IProps {
  copy: any;
}
export const Copy = memo(({ copy }: IProps) => {
  console.log("copiied!");
  const handleCopy = useCallback(
    () => copy && navigator.clipboard.writeText(copy),
    [copy]
  );

  return (
    <button
      className="outline-none p-1 flex items-center hover:text-green"
      onClick={handleCopy}
    >
      <FaCopy />
    </button>
  );
});
