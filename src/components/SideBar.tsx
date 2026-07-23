import CustomText from "./CustomText";
import { RiWallet3Fill } from "react-icons/ri";
const SideBar = () => {
  return (
    <div className="flex flex-col justify-between bg-[#1C1B1D] h-screen w-full shadow-amber-50 text-white border-r border-[#424754] py-4 px-4">
      <div>
        <div className="flex items-center gap-1 border-b border-[#424754] pb-4 mb-4">
          <div className="bg-[#4D8EFF] text-[#00285D] p-1 rounded-md">
            <RiWallet3Fill />
          </div>
          <div className="text-[#ADC6FF]">
            <CustomText variant="h3">Spendly</CustomText>
          </div>
        </div>
        <div>menu</div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default SideBar;
