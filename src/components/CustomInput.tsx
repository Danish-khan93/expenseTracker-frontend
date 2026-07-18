import CustomIcon from "./CustomIcon";
import { useState, type FC } from "react";
import { iconMap } from "../constant/iconMap";
type Props = {
  icon?: boolean;
  iconName?: keyof typeof iconMap;
  type?: "text" | "password" | "email" | "number";
};

const CustomInput: FC<Props> = (props) => {
  const { icon = false, iconName, type = "text" } = props;

  // password visibility toggle state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="bg-amber-100 border-2 border-gray-300 rounded-md p-2 flex items-center">
      <input
        className="border-none focus:outline-none w-full"
        type={type === "password" && showPassword ? "text" : type}
      />
      {icon === true && iconName && <CustomIcon iconName={iconName} />}

      {type === "password" && (
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword === true ? (
            <CustomIcon iconName={"eye"} />
          ) : (
            <CustomIcon iconName={"closeEye"} />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
