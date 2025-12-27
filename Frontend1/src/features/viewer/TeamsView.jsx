// src/features/viewer/teams/TeamsView.jsx

import { useEffect, useState } from "react";
import { getTeams } from "../../api/api";

const TeamsView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((res) => setTeams(res.data));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team) => (
        <div key={team._id}>
          <h3>{team.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default TeamsView;
