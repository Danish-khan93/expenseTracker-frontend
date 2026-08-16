import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "../components";

const MainLayout = () => {
  return (
    <div className="w-screen grid grid-cols-[250px_1fr] h-screen bg-[#131315]">
      <div>
        <SideBar />
      </div>
      <div className="fancy-scrollbar overflow-y-auto relative">
        <div className="fixed w-full ">
          <TopBar />
        </div>
        <div className="px-8 py-3 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
