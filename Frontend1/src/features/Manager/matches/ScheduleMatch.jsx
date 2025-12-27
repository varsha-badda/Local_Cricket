import { useEffect, useState } from "react";
import { getTeams, scheduleMatch } from "../../../api/api";

const ScheduleMatch = () => {
  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({
    teamA: "",
    teamB: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const res = await getTeams();
    setTeams(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.teamA === form.teamB) {
      alert("Teams must be different");
      return;
    }

    await scheduleMatch({
      teamA: form.teamA,
      teamB: form.teamB,
      date: `${form.date}T${form.time}`,
    });

    alert("Match scheduled");
    window.location.reload(); // simple refresh
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
      <h2 className="text-xl text-cyan-400 mb-4">Schedule Match</h2>

      <form className="grid md:grid-cols-5 gap-4" onSubmit={handleSubmit}>

        {/* Team A */}
        <select
          name="teamA"
          onChange={handleChange}
          className="p-2 bg-black border border-zinc-700 rounded"
          required
        >
          <option value="">Select Team A</option>
          {teams.map((t) => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Team B */}
        <select
          name="teamB"
          onChange={handleChange}
          className="p-2 bg-black border border-zinc-700 rounded"
          required
        >
          <option value="">Select Team B</option>
          {teams.map((t) => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="p-2 bg-black border border-zinc-700 rounded"
          required
        />

        {/* Time */}
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="p-2 bg-black border border-zinc-700 rounded"
          required
        />

        {/* Button */}
        <button className="bg-cyan-500 text-black font-semibold rounded">
          Schedule
        </button>

      </form>
    </div>
  );
};

export default ScheduleMatch;
