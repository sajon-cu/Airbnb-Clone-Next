import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  console.log("CategoryInput rendered...");
  return (
    <div
      onClick={() => {
        onClick(label);
      }}
      className={`
        flex flex-col gap-2 border-2 cursor-pointer hover:border-black p-4 rounded-xl transition ${
          selected ? "border-black" : "border-neutral"
        }
    `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
