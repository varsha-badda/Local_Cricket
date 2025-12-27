import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlayerById } from "../../../api/api";

const PlayerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, []);

  const fetchPlayer = async () => {
    try {
      const res = await getPlayerById(id);
      setPlayer(res.data);
    } catch (err) {
      console.error("Failed to load player", err);
    }
  };

  if (!player) {
    return (
      <p className="text-gray-400">Loading player details...</p>
    );
  }

  return (
    <div className="max-w-lg bg-zinc-900 p-6 rounded border border-zinc-700">
      <h1 className="text-2xl text-cyan-400 mb-4">
        Player Details
      </h1>

      <div className="space-y-2 text-gray-300">
        <p>
          <span className="text-pink-400">Name:</span>{" "}
          {player.name}
        </p>

        <p>
          <span className="text-pink-400">Role:</span>{" "}
          {player.role}
        </p>

        <p>
          <span className="text-pink-400">Team:</span>{" "}
          {player.team?.name || "Not Assigned"}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            navigate(`/manager/players/edit/${player._id}`)
          }
          className="px-4 py-2 bg-cyan-500 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => navigate("/manager/players")}
          className="px-4 py-2 bg-zinc-700 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PlayerDetails;
