import type { FC } from "react";
import CustomIcon from "../../../components/CustomIcon";
import { CustomText } from "../../../components";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  iconName: string;
  categoryName: string;
  spending: number;
  id: number;
};

const CateogoryCard: FC<Props> = (props) => {
  const { id, color, iconName, categoryName, spending } = props;
  console.log(id);

  return (
    <Link
      to={`${id}`}
      className="border border-[#C2C6D6] bg-[#1C1B1D] rounded-md p-2 "
    >
      <div
        style={{
          backgroundColor: color,
        }}
        className={`p-1 flex justify-center items-center w-10 h-10 text-black rounded-md`}
      >
        <CustomIcon iconName={iconName} />
      </div>
      <div>
        <CustomText variant="h5">{categoryName}</CustomText>
        <CustomText variant="p">{`${spending}`} </CustomText>
      </div>
      <div>progressbar</div>
    </Link>
  );
};

export default CateogoryCard;
