import { useState, type FC } from "react";
import type { ButtonListType } from "../constant/categoryConstant";

type Props = {
  listButton: ButtonListType[];
};

const CustomSwitch: FC<Props> = (props) => {
  const { listButton } = props;

  // activebutton
  const [activeButton, setActiveButton] = useState<number>(1);

  return (
    <div className="rounded-md border border-1-[#C2C6D6] p-1 flex gap-2 bg-[#1C1B1D]">
      {listButton?.map((value: ButtonListType) => {
        return (
          <button
            key={value?.id}
            className={`py-1 px-2 ${activeButton === value?.id ? "bg-[#A9BAD3] rounded-md" : ""}`}
            onClick={() => {
              setActiveButton(value?.id);
            }}
          >
            {value?.title}
          </button>
        );
      })}
    </div>
  );
};

export default CustomSwitch;
