import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer, getTeams } from "../../../api/api";

const AddPlayer = () => {
  const navigate = useNavigate();

  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    team: "",
  });

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const res = await getTeams();
    setTeams(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      console.log("SENDING PLAYER 👉", form);

      await addPlayer(form);
      alert("Player added successfully");
      navigate("/manager/players");
    } catch (err) {
      console.error("ADD PLAYER ERROR:", err.response?.data);
      alert(err.response?.data?.message || "Failed to add player");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md">
      <h2 className="text-xl text-cyan-400 mb-4">Add Player</h2>

      {/* NAME */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        placeholder="Player Name"
      />

      {/* ROLE (ENUM SAFE) */}
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
      >
        <option value="">Select Role</option>
        <option value="captain">Captain</option>
        <option value="Batsman">Batsman</option>
        <option value="Bowler">Bowler</option>
        <option value="All-rounder">All-Rounder</option>
        <option value="Wicketkeeper">Wicket-Keeper</option>
      </select>

      {/* TEAM (REQUIRED) */}
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
        Save
      </button>
    </form>
  );
};

export default AddPlayer;
