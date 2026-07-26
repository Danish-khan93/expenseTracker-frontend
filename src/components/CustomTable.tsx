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
    <div className="bg-red-300 my-5">
      {/* header  */}

      <div className="bg-green-300 flex">
        {columns?.map((value) => {
          return (
            <div className="bg-green-300 flex flex-col flex-1 ">
              <div
                key={value?.header}
                className={`p-1 bg-blue-200 flex-1 ${value?.align ? textAlign[value?.align] : "text-left"} w-full`}
              >
                <CustomText variant="h6">{value?.header}</CustomText>
              </div>
              <div className="flex flex-col flex-1">
                {row.map((exp) => {
                  return (
                    <div
                      className={`p-1 bg-blue-200 flex-1 ${value?.align ? textAlign[value?.align] : "text-left"} w-full`}
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
