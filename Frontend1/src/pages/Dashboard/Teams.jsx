import { useEffect, useState } from "react";
import { getTeams, addTeam, deleteTeam } from "../../api/team.api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const isManager = localStorage.getItem("role") === "manager";

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const res = await getTeams();
    setTeams(res.data);
  };

  const handleAdd = async () => {
    await addTeam({ name });
    setName("");
    loadTeams();
  };

  const handleDelete = async (id) => {
    await deleteTeam(id);
    loadTeams();
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl mb-4">Teams</h2>

        {isManager && (
          <div className="mb-4">
            <input
              className="text-black p-2"
              placeholder="Team name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAdd} className="ml-2 bg-green-500 p-2">
              Add
            </button>
          </div>
        )}

        <ul>
          {teams.map((t) => (
            <li key={t._id} className="flex justify-between">
              <span
                className="cursor-pointer"
                onClick={() => navigate(`/teams/${t._id}`)}
              >
                {t.name}
              </span>

              {isManager && (
                <button
                  onClick={() => handleDelete(t._id)}
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

export default Teams;
