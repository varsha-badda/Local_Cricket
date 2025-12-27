import { Routes, Route } from "react-router-dom";
import ViewerDashboard from "../pages/Dashboard/ViewerDashboard";
import Teams from "../pages/Dashboard/Teams";
import TeamDetails from "../pages/Dashboard/TeamDetails";
import Players from "../pages/Dashboard/Players";
import PlayerDetails from "../pages/Dashboard/PlayerDetails";
import Grounds from "../pages/Dashboard/Grounds";
import Matches from "../pages/Dashboard/Matches";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/viewer" element={<ProtectedRoute><ViewerDashboard /></ProtectedRoute>} />
      <Route path="/teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
      <Route path="/teams/:id" element={<ProtectedRoute><TeamDetails /></ProtectedRoute>} />
      <Route path="/players" element={<ProtectedRoute><Players /></ProtectedRoute>} />
      <Route path="/players/:id" element={<ProtectedRoute><PlayerDetails /></ProtectedRoute>} />
      <Route path="/grounds" element={<ProtectedRoute><Grounds /></ProtectedRoute>} />
      <Route path="/matches" element={<ProtectedRoute><Matches /></ProtectedRoute>} />
    </Routes>
  );
}
