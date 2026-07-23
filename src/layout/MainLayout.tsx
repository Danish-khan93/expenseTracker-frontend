import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "../components";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen bg-[#131315]">
      <div >
        <SideBar />
      </div>
      <div>
          <TopBar />
        <div className="bg-[#1C1B1D]">
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
