import type { FC } from "react";
import type { ColumnType, ExpenseResType } from "../constant/girdColumn";
import CustomText from "./CustomText";
import type { ExpenseListType } from "../modules/expense/type/expenseResType";

type Props = {
  columns: ColumnType<ExpenseResType>[];
  row: ExpenseListType[];
};

const CustomTable: FC<Props> = (props) => {
  const { columns, row } = props;

  const textAlign = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className="my-5 border border-gray-200">
      {/* header  */}

      <div className="flex overflow-hidden">
        {columns?.map((value) => {
          return (
            <div className="flex flex-col flex-1 bg-[#1C1B1D] rounded-md">
              <div
                key={value?.header}
                className={` overflow-hidden p-1 flex-1 ${value?.align ? textAlign[value?.align] : "text-left"} w-full `}
              >
                <CustomText variant="h6">{value?.header}</CustomText>
              </div>
              <div className="flex flex-col flex-1 bg-black rounded-md">
                {row.map((exp) => {
                  return (
                    <div
                      className={`p-1 flex-1 ${value?.align ? textAlign[value?.align] : "text-left"} w-full`}
                    >
                      <CustomText variant="p">{exp[value?.value]}</CustomText>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTable;
