import {LuSave} from "react-icons/lu";

interface MenuBottomProps {
  color: string[];
  setColor: (color: string) => void;
  select: string;
  handleSave: () => void;
}

export const MenuBottom: React.FC<MenuBottomProps> = ({
  color,
  setColor,
  select,
  handleSave,
}) => {
  return (
    <div className="flexBetweenCenter w-full">
      <div className="flex gap-2 items-center">
        {color.map((color, i) => (
          <button
            key={i}
            className={`w-7 h-7 border rounded-full border-light1 border cursor-pointer hover:opacity-100 
            ${select == color ? "opacity-100" : "opacity-30"}`}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></button>
        ))}
      </div>
      <button onClick={handleSave}><LuSave size={20} className="text-light hover:text-aqua" /></button>
    </div>
  );
};
