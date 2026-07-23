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
  handleClick: () => void;
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
    handleClick,
  } = props;

  const commonStyles = `px-4 py-1 rounded bg-[#ADC6FF] font-semibold text-[#002E6A] hover:bg-[#ADC6FF] focus:outline-none focus:ring-2 focus:ring-[#ADC6FF] focus:ring-opacity-75 ${minWidth}`;
  const iconStyle = `w-10 h-10 text-[#002E6A] flex items-center justify-center rounded-full bg-[#ADC6FF] hover:bg-[#ADC6FF] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 p-3`;
  return (
    <button
      onClick={handleClick}
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
