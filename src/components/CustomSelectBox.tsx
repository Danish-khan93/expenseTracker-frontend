import { useEffect, useState, type ChangeEvent } from "react";
import type {
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { apiHandler } from "../api/apihandler";
import type { ApiResponse } from "../type/golbalTypes";

type Props<T extends FieldValues> = {
  name: Path<T>;
  setName: Path<T>;
  label: string;
  dropDownList?: { value: string; id: number; label?: string }[];
  register: UseFormRegister<T>;
  setter: UseFormSetValue<T>;
  selectAll?: boolean;
  url?: string;
};

type List = { id: number; value: string; label: string }[];

const CustomSelectBox = <T extends FieldValues>(props: Props<T>) => {
  const {
    name,
    label,
    dropDownList,
    setName,
    register,
    setter,
    selectAll = false,
    url,
  } = props;

  // drop down list

  const [dropDownOption, setDropDownOption] = useState<List | []>([]);

  useEffect(() => {
    if (url) {
      (async () => {
        try {
          const response = await apiHandler<undefined, ApiResponse<List>>(
            "get",
            url,
          );

          setDropDownOption(response?.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [url]);

  const listOption = dropDownOption?.length > 0 ? dropDownOption : dropDownList;
  const registration = register(name);
  return (
    <div className="flex flex-col gap-1 item-start text-white w-full">
      <label htmlFor={name}>{label}</label>
      <select
        {...registration}
        name={name}
        id={name}
        className="w-full bg-[#1C1B1D] text-white border-2 border-[#424754] rounded-md p-2 "
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          const selectedId = Number(e.target.value);

          const selectedOption = listOption?.find(
            (item) => item.id === selectedId,
          );
          registration.onChange(e);

          if (selectedOption) {
            setter(
              setName,
              selectedOption.value as PathValue<T, typeof setName>,
              {
                shouldDirty: true,
              },
            );
          }
        }}
      >
        {selectAll && <option>Select Any</option>}
        {listOption?.map((list) => {
          return (
            <option key={list?.id} value={list?.id}>
              {list?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelectBox;
