import type { FC } from "react";
import { RiImageAddLine } from "react-icons/ri";


type Props = {
  label: string;
};

const CustomFileUpload: FC<Props> = ({ label }) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <label>{label}</label>

      <label
        htmlFor="file-upload"
        className="inline-flex w-fit items-center gap-2 rounded-md
        border border-[#ADC6FF] px-4 py-2 cursor-pointer
        text-[#ADC6FF] hover:bg-[#ADC6FF]/10 transition-colors"
      >
        <RiImageAddLine size={20} />
        <span>Add Image</span>
      </label>

      <input id="file-upload" type="file" accept="image/*" className="hidden" />
    </div>
  );
};

export default CustomFileUpload;
