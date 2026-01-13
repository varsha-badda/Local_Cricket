import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPlayers, deletePlayer } from "../../../api/api";
import Playericon from "../../../assets/cricket.png";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    const res = await getPlayers();
    setPlayers(res.data);
  };

  const handleDelete = async (id) => {
    if (confirm("Delete player?")) {
      await deletePlayer(id);
      fetchPlayers();
    }
  };

  return (
    <div>
       <h1 className="text-2xl text-cyan-400 mb-6 flex items-center gap-2"> <img
    src={Playericon}
    alt="Teams"
    className="w-7 h-8"/>Players</h1>

      <button
        className="mb-4 px-4 py-2 bg-pink-500 rounded"
        onClick={() => navigate("/manager/players/add")}
      >
        Add Player
      </button>

      <div className="grid md:grid-cols-4 gap-4">
        {players.map((p) => (
          <div
            key={p._id}
            className="bg-zinc-900 p-4 rounded border border-zinc-700 hover:border-pink-500"
          >
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-400 text-sm">{p.role}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => navigate(`/manager/players/edit/${p._id}`)}
                className="text-cyan-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
