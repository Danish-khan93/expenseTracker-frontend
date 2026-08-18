import { useState } from "react";
import type {
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from "react-hook-form";

const colorsList = [
  "#FF0000", // Red
  "#FF7A00", // Orange
  "#FFD000", // Yellow
  "#00C853", // Green
  "#00BFA5", // Teal
  "#00B8D4", // Cyan
  "#008CFF", // Blue
  "#304FFE", // Indigo
  "#6200EA", // Purple
  "#AA00FF", // Violet
  "#FF00AA", // Pink
  "#FF4081", // Rose
  "#795548", // Brown
  "#607D8B", // Blue Gray
  "#FFFFFF", // White
  "#9C27B0", // Deep Purple
  "#76FF03", // Lime
  "#FF5722", // Deep Orange
];

type Props<T extends FieldValues> = {
  name: Path<T>;
  setter: UseFormSetValue<T>;
  label: string;
};

const ColorSelection = <T extends FieldValues>(props: Props<T>) => {

  const { name, setter, label } = props;
  const colorList = colorsList;

  const [selectedColor, setSelectedColor] = useState<string>("");
  return (
    <div className="flex flex-col gap-2 text-white">
      <label>{label}</label>
      <div className="w-full p-2 grid grid-cols-12 gap-1 rounded-md border border-[#424754] bg-[#1C1B1D]">
        {colorList?.map((color) => {
          return (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={`w-10 h-10 rounded-full  ${selectedColor === color ? "border-2 border-[#ffff]" : "border border-[#424754]"} cursor-pointer`}
              onClick={() => {
                setSelectedColor(color);
                setter(name, color as PathValue<T, typeof name>);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelection;
