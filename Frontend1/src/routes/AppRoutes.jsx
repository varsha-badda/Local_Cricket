import { Routes, Route } from "react-router-dom";
import Login from "../features/Auth/Login";
import Register from "../features/Auth/Register";
import AddTeam from "../pages/Dashboard/AddTeam";
import Teams from "../pages/Dashboard/Teams";
import Players from "../pages/Dashboard/Players";
import Grounds from "../pages/Dashboard/Grounds";
import Matches from "../pages/Dashboard/Matches";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}
      <Route
        path="/teams"
        element={
          <ProtectedRoute>
            <Teams />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teams/add"
        element={
          <ProtectedRoute role="manager">
            <AddTeam />
          </ProtectedRoute>
        }
      />

      <Route
        path="/players"
        element={
          <ProtectedRoute>
            <Players />
          </ProtectedRoute>
        }
      />

      <Route
        path="/grounds"
        element={
          <ProtectedRoute>
            <Grounds />
          </ProtectedRoute>
        }
      />

      <Route
        path="/matches"
        element={
          <ProtectedRoute>
            <Matches />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
