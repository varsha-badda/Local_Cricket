import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

/* AUTH */
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

/* LAYOUTS */
import ManagerLayout from "../features/manager/ManagerLayout";
import ViewerLayout from "../features/viewer/ViewerLayout";

/* MANAGER */
import TeamList from "../features/manager/teams/TeamList";
import AddTeam from "../features/manager/teams/AddTeam";
import EditTeam from "../features/manager/teams/EditTeam";
import TeamDetails from "../features/manager/teams/TeamDetails";

import PlayerList from "../features/manager/players/PlayerList";
import AddPlayer from "../features/manager/players/AddPlayer";
import EditPlayer from "../features/manager/players/EditPlayer";
import PlayerDetails from "../features/manager/players/PlayerDetails";

import MatchesPage from "../features/manager/matches/MatchesPage";

/* VIEWER */
import TeamsView from "../features/viewer/TeamsView";
import PlayersView from "../features/viewer/PlayersView";
import MatchesView from "../features/viewer/MatchesView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* MANAGER */}
      <Route element={<ProtectedRoute role="manager" />}>
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="teams" element={<TeamList />} />
          <Route path="teams/add" element={<AddTeam />} />
          <Route path="teams/edit/:id" element={<EditTeam />} />
          <Route path="teams/:id" element={<TeamDetails />} />

          <Route path="players" element={<PlayerList />} />
          <Route path="players/add" element={<AddPlayer />} />
          <Route path="players/edit/:id" element={<EditPlayer />} />
          <Route path="players/:id" element={<PlayerDetails />} />

          {/* ✅ MATCHES */}
          <Route path="matches" element={<MatchesPage />} />
        </Route>
      </Route>

      {/* VIEWER */}
      <Route element={<ProtectedRoute role="viewer" />}>
        <Route path="/viewer" element={<ViewerLayout />}>
          <Route path="teams" element={<TeamsView />} />
          <Route path="players" element={<PlayersView />} />
          <Route path="matches" element={<MatchesView />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
