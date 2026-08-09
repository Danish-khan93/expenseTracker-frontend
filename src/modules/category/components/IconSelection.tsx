import { useLayoutEffect, useState } from "react";
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
};

const IconSelection = <T extends FieldValues>(props: Props<T>) => {
  const { name, setter } = props;
  const [iconList, setIconList] = useState<(keyof typeof iconMap)[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof iconMap | "">(
    "",
  );
  useLayoutEffect(() => {
    const icons = Object.keys(iconMap) as (keyof typeof iconMap)[];

    setIconList(icons);
  }, []);

  return (
    <div className="w-full p-2 grid grid-cols-12 gap-1 rounded-md border border-[#424754] bg-[#1C1B1D] ">
      {iconList?.map((value) => {
        return (
          <div
            key={value}
            onClick={() => {
              setSelectedIcon(value);
              setter(name, value as PathValue<T, typeof name>);
            }}
            className={`cursor-pointer rounded-md w-15 h-15 flex justify-center items-center gap-2 flex-noWrap ${selectedIcon === value ? "bg-amber-200" : "bg-[#2d2c2e]"} text-white`}
          >
            <CustomIcon iconName={value} />
          </div>
        );
      })}
    </div>
  );
};

export default IconSelection;
