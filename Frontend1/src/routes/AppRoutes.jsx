import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import Splash from "../pages/Splash.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import ManagerDashboard from "../pages/Dashboard/ManagerDashboard.jsx";
import ViewerDashboard from "../pages/Dashboard/ViewerDashboard.jsx";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Splash */}
      <Route path="/" element={<Splash />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboards */}
      <Route
        path="/manager"
        element={
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/viewer"
        element={
          <ProtectedRoute allowedRoles={["viewer", "manager"]}>
            <ViewerDashboard />
          </ProtectedRoute>
        }
      />

      
    </Routes>
  );
};

export default AppRoutes;
