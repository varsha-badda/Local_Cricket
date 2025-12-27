import { useEffect, useState } from "react";
import { getTeams } from "../../api/api";


const TeamView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const res = await getTeams();
    setTeams(res.data);
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 mb-6">Teams</h1>

      <div className="grid gap-4">
        {teams.map((team) => (
          <div
            key={team._id}
            className="bg-zinc-900 p-4 rounded border border-zinc-700"
          >
            <h2 className="text-lg text-white">{team.name}</h2>

            <p className="text-gray-400">
              Score:{" "}
              <span className="text-cyan-400">
                {team.score ?? 0}
              </span>
            </p>

            <p className="text-gray-400">
              Players: {team.playerCount ?? 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;
