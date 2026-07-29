import type { FC } from "react";

type Props = {
  name: string;
  label: string;
  dropDownList: { value: string; id: number }[];
};

const CustomSelectBox: FC<Props> = (props) => {
  const { name, label, dropDownList } = props;
  return (
    <div className="flex flex-col gap-1 item-start text-white">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="w-full bg-[#1C1B1D] text-white border-2 border-[#424754] rounded-md p-2 "
      >
        <div>
          <option>Select All</option>
          {dropDownList?.map((list) => {
            return <option value={list?.id}>{list?.value}</option>;
          })}
        </div>
      </select>
    </div>
  );
};

export default CustomSelectBox;
