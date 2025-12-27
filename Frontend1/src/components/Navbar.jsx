import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  // ❌ Do NOT show navbar on auth pages
  if (
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }

  // ❌ Do not render if role is missing
  if (!role) return null;

  const basePath = role === "manager" ? "/manager" : "/viewer";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#1f2025] text-white">
      <h1 className="text-xl font-bold text-cyan-400">
        🏏 Cricket App
      </h1>

      <div className="flex gap-6">
        <Link to={`${basePath}/teams`} className="hover:text-cyan-400">
          Teams
        </Link>

        <Link to={`${basePath}/players`} className="hover:text-cyan-400">
          Players
        </Link>

      

        <Link to={`${basePath}/matches`} className="hover:text-cyan-400">
          Matches
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <span className="px-3 py-1 bg-cyan-500 text-black rounded capitalize">
          {role}
        </span>

        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-pink-500 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
