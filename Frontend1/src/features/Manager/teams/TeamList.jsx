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
      <h2>Teams</h2>

      <button onClick={() => navigate("/manager/teams/add")}>
        ➕ Add Team
      </button>

      <hr />

      {teams.map((team) => (
        <div key={team._id} style={{ border: "1px solid #ccc", padding: 10, margin: 8 }}>
          <h3>{team.name}</h3>

          <button onClick={() => navigate(`/manager/teams/${team._id}`)}>
            View
          </button>

          <button onClick={() => navigate(`/manager/teams/edit/${team._id}`)}>
            Edit
          </button>

          <button onClick={() => handleDelete(team._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
