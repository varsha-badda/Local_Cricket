import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayerById, updatePlayer, getTeams } from "../../../api/api";

const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    team: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [playerRes, teamRes] = await Promise.all([
        getPlayerById(id),
        getTeams(),
      ]);

      setForm({
        name: playerRes.data.name,
        role: playerRes.data.role,
        team: playerRes.data.team?._id || playerRes.data.team,
      });

      setTeams(teamRes.data);
    } catch (err) {
      console.error("Failed to load player", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await updatePlayer(id, form);
      alert("Player updated successfully");
      navigate("/manager/players");
    } catch (err) {
      console.error("UPDATE PLAYER ERROR:", err.response?.data);
      alert(err.response?.data?.message || "Failed to update player");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md">
      <h2 className="text-xl text-cyan-400 mb-4">Edit Player</h2>

      {/* NAME */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        placeholder="Player Name"
      />

      {/* ROLE */}
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
      >
        <option value="">Select Role</option>
        <option value="Batsman">Batsman</option>
        <option value="Bowler">Bowler</option>
        <option value="All-Rounder">All-Rounder</option>
        <option value="Wicket-Keeper">Wicket-Keeper</option>
      </select>

      {/* TEAM */}
      <select
        name="team"
        value={form.team}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 bg-zinc-900 border border-zinc-700"
      >
        <option value="">Select Team</option>
        {teams.map((t) => (
          <option key={t._id} value={t._id}>
            {t.name}
          </option>
        ))}
      </select>

      <button className="px-4 py-2 bg-pink-500 rounded">
        Update
      </button>
    </form>
  );
};

export default EditPlayer;
