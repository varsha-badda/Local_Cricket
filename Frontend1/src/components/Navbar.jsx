import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // ✅ login route
  };

  return (
    <nav className="w-full bg-[#23242a] border-b border-[#45f3ff] px-6 py-3 flex justify-between items-center">
      
      {/* Logo */}
      <h2 className="text-xl font-bold text-[#45f3ff] tracking-wide cursor-pointer"
          onClick={() => navigate(token ? "/viewer" : "/")}
      >
        🏏 Cricket App
      </h2>

      {/* Links */}
      <div className="flex items-center gap-4">
        {!token && (
          <>
            <Link
              to="/"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-[#9eb3b5] hover:text-[#d9138a] transition"
            >
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            

            {/* Common pages */}
            <Link
              to="/teams"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Teams
            </Link>

            <Link
              to="/players"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Players
            </Link>

            <Link
              to="/grounds"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Grounds
            </Link>

            <Link
              to="/matches"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Matches
            </Link>

            {/* Manager badge (optional, visual only) */}
            {role === "manager" && (
              <span className="ml-2 px-2 py-1 text-xs rounded bg-[#45f3ff] text-black">
                Manager
              </span>
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-1.5 rounded-md
                         bg-[#d9138a] text-white
                         hover:bg-[#45f3ff] hover:text-black
                         transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
