import { FaCopy } from "react-icons/fa";

interface IProps {
  copy: string | any;
}
export default function Copy({ copy }: IProps) {

  const handleCopy = () => {
    copy && navigator.clipboard.writeText(copy);
  };

  return (
    <button
      className="outline-none p-1 flex items-center hover:text-green"
      onClick={handleCopy}
    >
      <FaCopy />
    </button>
  );
}
