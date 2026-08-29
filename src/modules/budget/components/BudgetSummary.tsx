import type { FC } from "react";
import { CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";
import type { iconMap } from "../../../constant/iconMap";

export type Props = {
  data: {
    heading: string;
    bgColor: string;
    iconName: keyof typeof iconMap;
    value: string;
    description?: string;
    progressBar?: string;
  };
};

const BudgetSummary: FC<Props> = (props) => {
  const { data } = props;

  const { heading, bgColor, iconName, value, description, progressBar } = data;

  return (
    <div className="flex flex-col items-left flex-1 gap-3 p-2 mx-1 rounded-md border border-[#C2C6D6] bg-[#292a2c]">
      <div className="flex justify-between items-center gap-3">
        <div>
          <CustomText variant="h5">{heading}</CustomText>
        </div>
        <div
          style={{
            backgroundColor: bgColor,
          }}
          className="w-10 h-10 p-2 flex justify-center items-center rounded-md"
        >
          <CustomIcon iconName={iconName} />
        </div>
      </div>
      <div>
        <CustomText variant="h4">{value}</CustomText>
      </div>
      <div className="my-2">
        {
          // Description
          description && <div>{description}</div>
        }
        {
          // Description
          progressBar && <div>{progressBar}</div>
        }
      </div>
    </div>
  );
};

export default BudgetSummary;
