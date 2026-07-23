import type { FC } from "react";
import type { ColumnType } from "../constant/girdColumn";
import CustomText from "./CustomText";

type Props = {
  columns: ColumnType[];
};

const CustomTable: FC<Props> = (props) => {
  const { columns } = props;

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
            <div
              key={value?.header}
              className={`p-1 bg-blue-200 flex-1 ${value?.align ? textAlign[value?.align] : "text-left"} w-full`}
            >
              <CustomText variant="h6">{value?.header}</CustomText>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTable;
