import { useLocation, useNavigate } from "react-router-dom";
import CustomText from "./CustomText";
import { RiWallet3Fill } from "react-icons/ri";
import CustomIcon from "./CustomIcon";
import type { sideBarType } from "../type/sideBarType";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location?.pathname);
  const checkPath = location?.pathname?.split("/")[1];
  // console.log(checkPath);

  const menuList: sideBarType[] = [
    {
      id: 1,
      title: "DashBoard",
      path: "/dashboard",
      icon: "dashboard",
    },
    {
      id: 2,
      title: "Expense",
      path: "/expense",
      icon: "expense",
    },
  ];

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
        <div>
          {menuList?.map((value) => {
            console.log(checkPath === value?.icon);
            const isActive = checkPath === value.path.split("/")[1];
            return (
              <div
                key={value?.id}
                onClick={() => {
                  navigate(value?.path);
                }}
                className={`flex gap-2 items-center p-2 shadow-2xl rounded-md my-1 w-full hover:bg-[#3A4A5F] cursor-pointer ${isActive ? "bg-[#3A4A5F]" : "hover:bg-[#3A4A5F]"}`}
              >
                <div>
                  <CustomIcon iconName={value?.icon} />
                </div>
                <div>{value?.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default SideBar;
