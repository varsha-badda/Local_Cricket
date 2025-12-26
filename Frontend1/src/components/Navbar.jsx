import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Hide navbar on splash page
  if (location.pathname === "/") {
    return null;
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🏏 Cricket App</h2>

      <div style={styles.links}>
        {!token && (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}

        {token && (
          <>
            {role === "manager" && (
              <Link to="/manager" style={styles.link}>Manager</Link>
            )}

            <Link to="/viewer" style={styles.link}>Viewer</Link>
            <Link to="/players" style={styles.link}>Players</Link>

            {role === "manager" && (
              <Link to="/players/add" style={styles.link}>Add Player</Link>
            )}

            <button onClick={handleLogout} style={styles.logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#0b132b",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  logout: {
    padding: "6px 12px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;
