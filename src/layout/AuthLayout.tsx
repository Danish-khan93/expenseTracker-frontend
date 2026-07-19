import { Outlet } from "react-router-dom";
import { CustomText } from "../components";
import { RiWallet3Fill } from "react-icons/ri";
import { BsGraphDown } from "react-icons/bs";
// import { FiShield } from "react-icons/fi";

const AuthLayout = () => {
  return (
    <div className="h-screen grid sm:grid-cols-2 grid-cols-1 divide-x-3 divide-solid divide-indigo-500 bg-[#131315] p-2">
      <div className="hidden sm:flex flex-col gap-4 items-start justify-center w-full p-4 relative">
        <div className="grid grid-cols-2 w-full absolute">
          <div className="h-screen w-full bg-linear-to-t from-[#adc6ff32] to-[#adc6ff3e] blur-3xl scale-125"></div>
        </div>
        <div className="text-[#ADC6FF] flex items-center gap-2 z-20">
          <div className="text-[#002E6A] p-1 bg-[#ADC6FF] rounded-md">
            <RiWallet3Fill />
          </div>
          <CustomText variant="h2">Spendly</CustomText>
        </div>
        <div className="text-[#E5E1E4]">
          <CustomText variant="h1">Master your wealth with</CustomText>
          <CustomText variant="h1">precision.</CustomText>
        </div>
        <div className="text-[#E5E1E4]">
          <CustomText variant="p">
            The next-generation expense management platform for individuals who
            demand technical clarity and financial performance. Built for speed,
            security, and absolute control.
          </CustomText>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="border border-[#8C909F] rounded-md p-2 bg-[#201F22] text-[#E5E1E4]">
            <BsGraphDown />
            <CustomText variant="p">Advanced Insights</CustomText>
            <CustomText variant="p">
              Real-time data visualization of your cash flow.
            </CustomText>
          </div>
          <div className="border border-[#8C909F] rounded-md p-2 bg-[#201F22] text-[#E5E1E4]">
            <BsGraphDown />
            <CustomText variant="p">Advanced Insights</CustomText>
            <CustomText variant="p">
              Real-time data visualization of your cash flow.
            </CustomText>
          </div>
        </div>
      </div>

      <div className=" text-white ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
