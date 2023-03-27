import { FaCopy } from 'react-icons/fa';
export default function Copy({ textCopy }) {
  const handleCopy = () => {
    if (textCopy.length != 0 || textCopy != undefined) {
      navigator.clipboard.writeText(textCopy);
    } else {
      return;
    }
  };
  return (
    <button
      className="text-mainBtn outline-none p-1 flex justify-end col-end-4"
      onClick={handleCopy}
    >
      <FaCopy />
    </button>
  );
}
