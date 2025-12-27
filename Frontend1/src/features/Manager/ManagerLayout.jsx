import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ManagerLayout = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex bg-[#23242a] text-white">
        {/* Sidebar */}
        <aside className="w-[220px] bg-[#28292d] p-4">
          <h2 className="text-[#45f3ff] font-bold text-lg mb-6">
            Manager Panel
          </h2>

          <nav className="flex flex-col gap-3 text-[#9eb3b5]">
            <NavLink
              to="/manager/teams"
              className={({ isActive }) =>
                isActive ? "text-[#45f3ff]" : ""
              }
            >
              Teams
            </NavLink>

            <NavLink
              to="/manager/players"
              className={({ isActive }) =>
                isActive ? "text-[#45f3ff]" : ""
              }
            >
              Players
            </NavLink>

            <NavLink
              to="/manager/grounds"
              className={({ isActive }) =>
                isActive ? "text-[#45f3ff]" : ""
              }
            >
              Grounds
            </NavLink>

            <NavLink
              to="/manager/matches"
              className={({ isActive }) =>
                isActive ? "text-[#45f3ff]" : ""
              }
            >
              Matches
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-[#23242a]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ManagerLayout;
