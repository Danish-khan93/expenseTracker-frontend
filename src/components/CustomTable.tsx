import type { FC } from "react";
import type { ColumnType, ExpenseResType } from "../constant/girdColumn";
import CustomText from "./CustomText";
import type { ExpenseListType } from "../modules/expense/type/expenseResType";
import { useNavigate } from "react-router-dom";

type Props = {
  columns: ColumnType<ExpenseResType>[];
  rows: ExpenseListType[];
  navigateById: boolean;
  textPosition: "left" | "right" | "center";
};

const CustomTable: FC<Props> = (props) => {
  const { columns, rows, navigateById = false, textPosition } = props;

  const navigate = useNavigate();

  // handle navigate
  const handleClick = (id: number) => {
    navigate(`${id}`);
  };

  const justifyAlign = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div className="my-4 w-full h-auto bg-black border border-[#8C909F] rounded-md flex flex-col gap-1">
      {/* for header */}
      <div className="bg-[#1C1B1D] p-2 rounded-t-md flex items-center">
        {columns?.map((value) => {
          return (
            <div className="flex flex-1" key={value?.header}>
              <CustomText variant="h6">{value?.header}</CustomText>
            </div>
          );
        })}
      </div>
      {/* for rows */}

      <div className="p-1">
        {rows.map((row, index) => {
          return (
            <div
              key={index}
              className="bg-[#1C1B1D] flex my-2 p-2 rounded-md shadow-lg cursor-pointer"
              onClick={() => navigateById && handleClick(row?.id)}
            >
              {columns?.map((col, ind) => {
                return (
                  <div
                    key={ind}
                    className={`flex flex-1 w-full ${justifyAlign[textPosition]}`}
                  >
                    <CustomText variant="p">{row[col?.value]}</CustomText>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="p-2 bg-[#1C1B1D] rounded-b-md">
        <CustomText variant="h6">footer</CustomText>
      </div>
    </div>
  );
};

export default CustomTable;
