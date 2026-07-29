import { iconMap } from "../constant/iconMap";

export type sideBarType = {
  id: number;
  title: string;
  path: string;
  icon: keyof typeof iconMap;
};
