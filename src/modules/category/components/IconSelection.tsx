import { useEffect, useState } from "react";
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
  valueWhenUpdate?: string;
};

const iconList = Object.keys(iconMap) as (keyof typeof iconMap)[];

const IconSelection = <T extends FieldValues>(props: Props<T>) => {
  const { name, setter, label, valueWhenUpdate } = props;

  const [selectedIcon, setSelectedIcon] = useState<string>();

  useEffect(() => {
    if (valueWhenUpdate) {
      setSelectedIcon(valueWhenUpdate);
    }
  }, [valueWhenUpdate]);

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
              style={{
                backgroundColor: selectedIcon === value ? "#3A4A5F" : "#2d2c2e",
              }}
              className={`cursor-pointer rounded-md w-15 h-15 flex justify-center items-center gap-2 flex-noWrap text-white`}
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
