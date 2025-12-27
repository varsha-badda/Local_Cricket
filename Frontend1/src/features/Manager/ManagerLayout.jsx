import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ManagerLayout = () => {
  return (
    <>
      

      <div className="min-h-screen flex bg-[#23242a] text-white">
        

        {/* Content */}
        <main className="flex-1 p-6 bg-[#23242a]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ManagerLayout;
