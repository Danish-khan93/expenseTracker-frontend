import type { FC } from "react";
import { iconMap } from "../constant/iconMap";

type Props = {
  iconName: keyof typeof iconMap;
};

const CustomIcon: FC<Props> = (props) => {
  const { iconName } = props;

  const Icon = iconMap[iconName];

  return <Icon />;
};

export default CustomIcon;
