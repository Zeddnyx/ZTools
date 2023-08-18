import { useRouter } from "next/navigation";

interface MenuBottomProps {
  color: string[];
  setColor: (color: string) => void;
}

export const MenuBottom: React.FC<MenuBottomProps> = ({ color, setColor }) => {
  const navigate = useRouter()
  const handleSave = () => {
    navigate.push("/dashboard/notes")
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        {color.map((color, i) => (
          <div
            className="w-7 h-7 border rounded-full border-dark2 cursor-pointer"
            key={i}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></div>
        ))}
      </div>
      <button onClick={() => handleSave()}>Save</button>
    </div>
  );
};
