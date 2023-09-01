import { BiArrowBack } from "react-icons/bi";

interface IBack {
  handleSave: () => void;
}

export const ButtonBack: React.FC<IBack> = ({handleSave}) => {
  return (
    <div className="flex w-full" onClick={handleSave}>
      <button>
        <BiArrowBack />
      </button>
    </div>
  );
};
