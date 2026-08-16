import CustomIcon from "./CustomIcon";
import { useState, type ChangeEvent } from "react";
import { iconMap } from "../constant/iconMap";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { inputFormating } from "../utilities/inputUtilis";
type Props<T extends FieldValues> = {
  icon: boolean;
  iconName?: keyof typeof iconMap;
  type: "text" | "password" | "email" | "number";
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  formatType: "capitalCase" | "lowerCase";
};

const CustomInput = <T extends FieldValues>(props: Props<T>) => {
  const {
    icon = false,
    iconName,
    type = "text",
    label,
    name,
    register,
    formatType,
  } = props;

  console.log("CustomInput render:", name);

  // password visibility toggle state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const registration = register(name);
  return (
    <div className="text-white flex flex-col items-start gap-1 w-full">
      <label htmlFor={name}>{label}</label>

      <div className="w-full bg-[#1C1B1D] border-2 border-[#424754] rounded-md p-2 flex items-center gap-1">
        {icon === true && iconName && <CustomIcon iconName={iconName} />}
        <input
          {...registration}
          id={name}
          name={name}
          className="border-none focus:outline-none w-full"
          type={type === "password" && showPassword ? "text" : type}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const formattedValue = inputFormating(e.target.value, formatType);

            // Show formatted value in the input
            e.target.value = formattedValue;

            // Save formatted value in React Hook Form
            registration.onChange(e);
          }}
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
