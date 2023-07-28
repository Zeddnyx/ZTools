import { FaCopy } from 'react-icons/fa';

interface IProps {
  copy: string;
}
export default function Copy({ copy }: IProps) {
  const handleCopy = () => {
    if (copy.length != 0 || copy != undefined) {
      navigator.clipboard.writeText(copy);
    } else {
      return;
    }
  };
  return (
    <button
      className="outline-none p-1 flex items-center"
      onClick={handleCopy}
    >
      <FaCopy />
    </button>
  );
}

