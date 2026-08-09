import type { FC } from "react";
import { CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";
import type { iconMap } from "../../../constant/iconMap";

type Props = {
  title: string;
  categoryName: string;
  iconName: keyof typeof iconMap;
  color: string;
};

const CategoryHighlightsCard: FC<Props> = (props) => {
  const { title, categoryName, iconName, color } = props;
  return (
    <div className="flex justify-between items-center p-2 rounded-md border border-[#C2C6D6] bg-[#1C1B1D]">
      <div>
        <CustomText variant="p">{title}</CustomText>
        <CustomText variant="h6">{categoryName}</CustomText>
      </div>
      <div
        className={`bg-[${color}] p-2 flex justify-center items-center rounded-full`}
      >
        <CustomIcon iconName={iconName} />
      </div>
    </div>
  );
};

export default CategoryHighlightsCard;
