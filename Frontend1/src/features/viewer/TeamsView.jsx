import { useEffect, useState } from "react";
import { getTeams } from "../../api/api";

const TeamsView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((res) => setTeams(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-cyan-400 mb-4">Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teams.map((team) => (
          <div
            key={team._id}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-pink-500"
          >
            <h2 className="text-lg font-semibold">{team.name}</h2>
            <p className="text-gray-400 text-sm">
              Players: {team.players?.length || 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsView;
