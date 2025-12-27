import { useEffect, useState } from "react";
import { getTeams } from "../../api/team.api";
import { useNavigate } from "react-router-dom";


const Teams = () => {
  const [teams, setTeams] = useState([]);
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
      console.error("Failed to load teams");
    }
  };
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this team?"
  );

  if (!confirmDelete) return;

  try {
    await deleteTeam(id);

    // Remove from UI instantly
    setTeams((prevTeams) =>
      prevTeams.filter((team) => team._id !== id)
    );
  } catch (error) {
    alert("Failed to delete team");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] text-white px-10 py-8">

      {/* 🏏 HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-cyan-400">
          🏏 Teams Dashboard
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Welcome {role === "manager" ? "Manager" : "Viewer"} — explore cricket teams
        </p>
      </div>

      {/* ADD TEAM (Manager only) */}
      {role === "manager" && (
        <div className="flex justify-end mb-8">
          <button
            onClick={() => navigate("/teams/add")}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold
                       hover:bg-cyan-400 hover:scale-105 transition-all shadow-md"
          >
            ➕ Add Team
          </button>
        </div>
      )}

      {/* TEAMS GRID */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <div
            key={team._id}
            className="relative bg-[#020617] rounded-2xl p-6 border border-cyan-500/20
                       hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee33]
                       transition-all duration-300"
          >
            {/* TEAM NAME */}
            <h2 className="text-2xl font-bold text-cyan-300 mb-3 tracking-wide">
              {team.name}
            </h2>

            {/* TEAM INFO */}
            <div className="text-sm text-gray-300 space-y-1">
              <p>
                <span className="text-gray-400">Score:</span>{" "}
                <span className="font-semibold">{team.score ?? 0}</span>
              </p>
              <p>
                <span className="text-gray-400">Players:</span>{" "}
                {team.players?.length || 0}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => navigate(`/teams/${team._id}`)}
                className="px-4 py-2 rounded-md bg-cyan-500 text-black text-sm font-semibold
                           hover:bg-cyan-400 transition"
              >
                View Players
              </button>

              {role === "manager" && (
                <>
                  <button
                    className="px-4 py-2 rounded-md bg-yellow-400 text-black text-sm
                               hover:bg-yellow-300 transition"
                  >
                    Edit
                  </button>

                  {role === "manager" && (
  <button
    onClick={() => handleDelete(team._id)}
    className="px-4 py-2 rounded-md bg-pink-600 text-white text-sm
               hover:bg-pink-500 transition"
  >
    Delete
  </button>
)}

                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {teams.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          <p className="text-lg">No teams available</p>
          <p className="text-sm mt-1">
            {role === "manager"
              ? "Add a team to get started 🏏"
              : "Please check back later"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Teams;
