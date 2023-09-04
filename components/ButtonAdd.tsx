import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

interface IButton {
  isRoutes: boolean;
  href: string;
  onClick?: () => void;
}

export const ButtonAdd: React.FC<IButton> = ({isRoutes, href, onClick}) => {
  return (
    <div className="button-add-container">
      <button className="button-add" onClick={onClick}>
        {isRoutes && (
          <Link href={href} >
            <IoMdAdd size={38} />
          </Link>
        )}
        {!isRoutes && <IoMdAdd size={38} />}
      </button>
    </div>
  );
};
