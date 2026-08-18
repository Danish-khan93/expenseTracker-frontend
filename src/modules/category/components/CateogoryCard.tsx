import type { FC } from "react";
import CustomIcon from "../../../components/CustomIcon";
import type { iconMap } from "../../../constant/iconMap";
import { CustomText } from "../../../components";

type Props = {
  color: string;
  iconName: keyof typeof iconMap;
  categoryName: string;
  spending: number;
};

const CateogoryCard: FC<Props> = (props) => {
  const { color, iconName, categoryName, spending } = props;
  return (
    <div className="border border-[#C2C6D6] bg-[#1C1B1D] rounded-md p-2 ">
      <div
        className={`bg-[${color}] p-1 flex justify-center items-center w-10 h-10 text-black rounded-md`}
      >
        <CustomIcon iconName={iconName} />
      </div>
      <div>
        <CustomText variant="h5">{categoryName}</CustomText>
        <CustomText variant="p">{`${spending}`} </CustomText>
      </div>
      <div>progressbar</div>
    </div>
  );
};

export default CateogoryCard;
