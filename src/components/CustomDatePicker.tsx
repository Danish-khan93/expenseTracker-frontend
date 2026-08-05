import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
};

const CustomDatePicker = <T extends FieldValues>(props: Props<T>) => {
  const { label, register, name } = props;

  return (
    <div className="text-white flex flex-col items-start gap-1 w-full">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name)}
        type="date"
        name={name}
        className="w-full bg-[#1C1B1D] border-2 border-[#424754] rounded-md p-2 flex items-center justify-between "
      />
    </div>
  );
};

export default CustomDatePicker;
