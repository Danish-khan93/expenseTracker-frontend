import type { FC } from "react";
import CustomIcon from "./CustomIcon";
import type { iconMap } from "../constant/iconMap";

type Props = {
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  variant?: "icon" | "text" | "textIcon";
  startIcon?: boolean;
  icon?: keyof typeof iconMap;
  minWidth?: string;
};

const CustomButton: FC<Props> = (props) => {
  // destructuring props
  const {
    type = "button",
    children,
    variant = "text",
    startIcon = true,
    icon,
    minWidth = "w-full",
  } = props;

  const commonStyles = `px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${minWidth}`;
  const iconStyle = `w-10 h-10 text-white flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 p-3`;
  return (
    <button
      type={type}
      className={variant === "icon" ? iconStyle : commonStyles}
    >
      {variant === "text" ? (
        <div>{children}</div>
      ) : variant === "textIcon" ? (
        <div
          className={`flex items-center justify-center gap-3 ${startIcon ? "flex-row" : "flex-row-reverse"} `}
        >
          <div>{icon && <CustomIcon iconName={icon} />}</div>
          <div>{children}</div>
        </div>
      ) : (
        <div>{icon && <CustomIcon iconName={icon} />}</div>
      )}
    </button>
  );
};

export default CustomButton;
