import type { FC } from "react";
import CustomIcon from "./CustomIcon";
import type { iconMap } from "../constant/iconMap";

type Props = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "icon" | "text" | "textIcon";
  startIcon?: boolean;
  icon?: keyof typeof iconMap;
};

const CustomButton: FC<Props> = (props) => {
  // destructuring props
  const {
    type = "button",
    children,
    variant = "text",
    startIcon = true,
    icon,
  } = props;

  const commonStyles =
    "px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

  return (
    <button type={type} className={commonStyles}>
      {variant === "text" ? (
        <div>{children}</div>
      ) : variant === "textIcon" ? (
        <div
          className={`flex items-center justify-evenly gap-3 ${startIcon ? "flex-row" : "flex-row-reverse"} `}
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
