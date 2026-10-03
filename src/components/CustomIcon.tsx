import type { FC } from "react";
import { iconMap } from "../constant/iconMap";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

type Props = {
  iconName: string;
};

const CustomIcon: FC<Props> = ({ iconName }) => {
  const isIconName = (name: string): name is keyof typeof iconMap => {
    return name in iconMap;
  };

  const Icon = isIconName(iconName) ? iconMap[iconName] : TfiLayoutPlaceholder;

  return <Icon className="text-white" />;
};

export default CustomIcon;
