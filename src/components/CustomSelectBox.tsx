import type { ChangeEvent } from "react";
import type {
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  setName: Path<T>;
  label: string;
  dropDownList: { value: string; id: number }[];
  register: UseFormRegister<T>;
  setter: UseFormSetValue<T>;
};

const CustomSelectBox = <T extends FieldValues>(props: Props<T>) => {
  const { name, label, dropDownList, setName, register, setter } = props;

  return (
    <div className="flex flex-col gap-1 item-start text-white">
      <label htmlFor={name}>{label}</label>
      <select
        {...register(name)}
        name={name}
        id={name}
        className="w-full bg-[#1C1B1D] text-white border-2 border-[#424754] rounded-md p-2 "
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          const id = e?.target?.value;
          console.log(id, typeof id);
          const findVal = dropDownList?.find((val) => val?.id === +id);
          console.log(findVal);

          setter(name, findVal?.id as PathValue<T, typeof name>);
          setter(setName, findVal?.value as PathValue<T, typeof name>);
        }}
      >
        <option>Select All</option>
        {dropDownList?.map((list) => {
          return (
            <option key={list?.id} value={list?.id}>
              {list?.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelectBox;
