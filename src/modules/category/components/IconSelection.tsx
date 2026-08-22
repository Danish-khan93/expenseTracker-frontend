import { useState } from "react";
import { iconMap } from "../../../constant/iconMap";
import CustomIcon from "../../../components/CustomIcon";
import type {
  FieldValues,
  UseFormSetValue,
  Path,
  PathValue,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  setter: UseFormSetValue<T>;
  label: string;
};



 const iconList = Object.keys(iconMap) as (keyof typeof iconMap)[];

const IconSelection = <T extends FieldValues>(props: Props<T>) => {
  const { name, setter, label } = props;
  //   const [iconList, setIconList] = useState<(keyof typeof iconMap)[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof iconMap | "">(
    "",
  );

 

  return (
    <div className="flex flex-col gap-2 text-white">
      <label>{label}</label>

      <div className="w-full p-2 grid grid-cols-12 gap-1 rounded-md border border-[#424754] bg-[#1C1B1D] ">
        {iconList.map((value) => {
          return (
            <button
              type={"button"}
              key={value}
              onClick={() => {
                setSelectedIcon(value);
                setter(name, value as PathValue<T, typeof name>);
              }}
              className={`cursor-pointer rounded-md w-15 h-15 flex justify-center items-center gap-2 flex-noWrap ${selectedIcon === value ? "bg-[#3A4A5F]" : "bg-[#2d2c2e]"} text-white`}
            >
              <CustomIcon iconName={value} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default IconSelection;
