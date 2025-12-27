import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // role mismatch
  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
