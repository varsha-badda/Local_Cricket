import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTeams,
  updateTeamScore,
  deleteTeam,      // ✅ ADD THIS
} from "../../../api/api";

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [editedScores, setEditedScores] = useState({});
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await getTeams();
      setTeams(res.data);
    } catch (err) {
      console.error("Failed to load teams", err);
    }
  };

  const handleScoreUpdate = async (id, value) => {
    try {
      await updateTeamScore(id, Number(value));
      setEditedScores({});
      fetchTeams();
    } catch (err) {
      alert("Failed to update score");
    }
  };

  // ✅ DELETE TEAM HANDLER
  const handleDeleteTeam = async (id) => {
    if (!window.confirm("Are you sure you want to delete this team?")) return;

    try {
      await deleteTeam(id);
      fetchTeams();
    } catch (err) {
      alert("Failed to delete team");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 mb-6">Teams</h1>

      {/* ADD TEAM BUTTON */}
      {role === "manager" && (
        <button
          onClick={() => navigate("/manager/teams/add")}
          className="mb-6 px-4 py-2 bg-cyan-500 text-black rounded hover:scale-105 transition"
        >
          + Add Team
        </button>
      )}

      {teams.length === 0 ? (
        <p className="text-gray-400">No teams available</p>
      ) : (
        <div className="grid gap-4">
          {teams.map((team) => (
            <div
              key={team._id}
              className="bg-zinc-900 p-4 rounded border border-zinc-700 flex justify-between items-center"
            >
              {/* LEFT */}
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {team.name}
                </h2>

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

              {/* RIGHT – MANAGER ONLY */}
              {role === "manager" && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={
                      editedScores[team._id] ?? team.score ?? 0
                    }
                    onChange={(e) =>
                      setEditedScores({
                        ...editedScores,
                        [team._id]: e.target.value,
                      })
                    }
                    className="w-20 p-1 bg-black border border-zinc-700 rounded text-white"
                  />

                  <button
                    onClick={() =>
                      handleScoreUpdate(
                        team._id,
                        editedScores[team._id] ?? team.score
                      )
                    }
                    className="px-3 py-1 bg-pink-500 rounded"
                  >
                    Update
                  </button>

                  {/* ✅ DELETE BUTTON */}
                  <button
                    onClick={() => handleDeleteTeam(team._id)}
                    className="px-3 py-1 bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamList;
