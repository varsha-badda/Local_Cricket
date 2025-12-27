import { useEffect, useState } from "react";
import { getPlayers } from "../../api/player.api";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    const res = await getPlayers();
    setPlayers(res.data);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 py-8">
      <h1 className="text-4xl font-bold text-cyan-400">Players</h1>
      <p className="text-gray-400 mt-2">
        Welcome {role === "manager" ? "Manager" : "Viewer"}
      </p>

      {role === "manager" && (
        <button
          onClick={() => navigate("/players/add")}
          className="mt-6 mb-8 px-6 py-2 bg-cyan-500 text-black rounded-lg"
        >
          ➕ Add Player
        </button>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((p) => (
          <div key={p._id} className="bg-[#020617] border border-cyan-500/20 rounded-xl p-5">
            <h2 className="text-xl text-cyan-300 font-semibold">{p.name}</h2>
            <p className="text-gray-400">Role: {p.role}</p>
            <p className="text-gray-400">Team: {p.team?.name}</p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => navigate(`/players/${p._id}`)}
                className="px-4 py-1 bg-cyan-500 text-black rounded"
              >
                View
              </button>

              {role === "manager" && (
                <>
                  <button className="px-4 py-1 bg-yellow-400 text-black rounded">
                    Edit
                  </button>
                  <button className="px-4 py-1 bg-pink-600 text-white rounded">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
