import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ManagerLayout = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", minHeight: "90vh" }}>
        {/* Sidebar */}
        <aside style={{ width: "200px", borderRight: "1px solid #ddd", padding: "1rem" }}>
          <h3>Manager</h3>

          <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <NavLink to="/manager/teams">Teams</NavLink>
            <NavLink to="/manager/players">Players</NavLink>
            <NavLink to="/manager/grounds">Grounds</NavLink>
            <NavLink to="/manager/matches">Matches</NavLink>
          </nav>
        </aside>

        {/* Page Content */}
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ManagerLayout;
