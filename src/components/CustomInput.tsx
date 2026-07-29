import CustomIcon from "./CustomIcon";
import { useState, type FC } from "react";
import { iconMap } from "../constant/iconMap";
type Props = {
  icon?: boolean;
  iconName?: keyof typeof iconMap;
  type?: "text" | "password" | "email" | "number";
  label: string;
  name?: string;
};

const CustomInput: FC<Props> = (props) => {
  const { icon = false, iconName, type = "text", label, name } = props;

  // password visibility toggle state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="text-white flex flex-col items-start gap-1 w-full">
      <label htmlFor={name}>{label}</label>

      <div className="w-full bg-[#1C1B1D] border-2 border-[#424754] rounded-md p-2 flex items-center gap-1">
        {icon === true && iconName && <CustomIcon iconName={iconName} />}
        <input
          id={name}
          name={name}
          className="border-none focus:outline-none w-full"
          type={type === "password" && showPassword ? "text" : type}
        />

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
    </div>
  );
};

export default CustomInput;
