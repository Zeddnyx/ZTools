import { memo } from "react";
import { FaCopy } from "react-icons/fa";

interface IProps {
  copy: any;
}
export const Copy = memo(({ copy }: IProps) => {
  const handleCopy = () => copy && navigator.clipboard.writeText(copy)

  return (
    <button
      className="outline-none p-1 flex items-center hover:text-green"
      onClick={handleCopy}
    >
      <FaCopy />
    </button>
  );
});
