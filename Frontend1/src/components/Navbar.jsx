import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-[#23242a] border-b border-[#45f3ff] px-6 py-3 flex justify-between items-center">
      
      {/* Logo */}
      <h2 className="text-xl font-bold text-[#45f3ff] tracking-wide">
        🏏 Cricket App
      </h2>

      {/* Links */}
      <div className="flex items-center gap-4">
        {!token && (
          <>
            <Link
              to="/login"
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
            {role === "manager" && (
              <Link
                to="/manager"
                className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
              >
                Manager
              </Link>
            )}

            <Link
              to="/viewer"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Viewer
            </Link>

            <Link
              to="/players"
              className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
            >
              Players
            </Link>

            {role === "manager" && (
              <Link
                to="/players/add"
                className="text-[#9eb3b5] hover:text-[#45f3ff] transition"
              >
                Add Player
              </Link>
            )}

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
