import { useEffect, useState } from "react";
import { getPlayers, addPlayer, deletePlayer } from "../../api/player.api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const isManager = localStorage.getItem("role") === "manager";

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await getPlayers();
    setPlayers(res.data);
  };

  const handleAdd = async () => {
    await addPlayer({ name });
    setName("");
    loadPlayers();
  };

  const handleDelete = async (id) => {
    await deletePlayer(id);
    loadPlayers();
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl mb-4">Players</h2>

        {isManager && (
          <div className="mb-4">
            <input
              className="text-black p-2"
              placeholder="Player name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAdd} className="ml-2 bg-green-500 p-2">
              Add
            </button>
          </div>
        )}

        <ul>
          {players.map((p) => (
            <li key={p._id} className="flex justify-between">
              <span
                className="cursor-pointer"
                onClick={() => navigate(`/players/${p._id}`)}
              >
                {p.name}
              </span>

              {isManager && (
                <button
                  onClick={() => handleDelete(p._id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Players;
