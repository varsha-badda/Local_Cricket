import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeams, deleteTeam } from "../../../api/api";

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const res = await getTeams();
    setTeams(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this team?")) {
      await deleteTeam(id);
      loadTeams();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-[#45f3ff] font-bold">Teams</h1>

        <button
          onClick={() => navigate("/manager/teams/add")}
          className="bg-[#45f3ff] text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          + Add Team
        </button>
      </div>

      <div className="grid gap-4">
        {teams.map((team) => (
          <div
            key={team._id}
            className="bg-[#28292d] p-4 rounded-xl flex justify-between items-center"
          >
            <h3 className="text-white font-semibold">{team.name}</h3>

            <div className="flex gap-3 text-sm">
              <button
                onClick={() => navigate(`/manager/teams/${team._id}`)}
                className="text-[#45f3ff]"
              >
                View
              </button>

              <button
                onClick={() => navigate(`/manager/teams/edit/${team._id}`)}
                className="text-[#9eb3b5]"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(team._id)}
                className="text-[#d9138a]"
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

export default TeamList;
