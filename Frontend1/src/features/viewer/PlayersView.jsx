import { useEffect, useState } from "react";
import { getPlayers } from "../../api/api";

const PlayersView = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((res) => setPlayers(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-cyan-400 mb-4">Players</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {players.map((player) => (
          <div
            key={player._id}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-pink-500"
          >
            <h2 className="font-semibold">{player.name}</h2>
            <p className="text-sm text-gray-400">
              Role: {player.role}
            </p>
            <p className="text-sm text-gray-400">
              Team: {player.team?.name || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersView;
