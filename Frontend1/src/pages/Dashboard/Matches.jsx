import { useEffect, useState } from "react";
import { getMatches, scheduleMatch } from "../../api/match.api";
import { getTeams } from "../../api/team.api";
import Navbar from "../../components/Navbar";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const isManager = localStorage.getItem("role") === "manager";

  const [form, setForm] = useState({
    teamA: "",
    teamB: "",
    ground: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setMatches((await getMatches()).data);
    setTeams((await getTeams()).data);
  };

  const handleSchedule = async () => {
    await scheduleMatch(form);
    loadData();
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl mb-4">Matches</h2>

        {isManager && (
          <div className="mb-6 space-y-2">
            <select onChange={(e) => setForm({ ...form, teamA: e.target.value })}>
              <option>Select Team A</option>
              {teams.map((t) => (
                <option key={t._id} value={t._id}>{t.name}</option>
              ))}
            </select>

            <select onChange={(e) => setForm({ ...form, teamB: e.target.value })}>
              <option>Select Team B</option>
              {teams.map((t) => (
                <option key={t._id} value={t._id}>{t.name}</option>
              ))}
            </select>

            <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} />
            <input placeholder="Ground ID" onChange={(e) => setForm({ ...form, ground: e.target.value })} />

            <button onClick={handleSchedule} className="bg-green-500 p-2">
              Schedule
            </button>
          </div>
        )}

        <ul>
          {matches.map((m) => (
            <li key={m._id}>
              {m.teamA?.name} vs {m.teamB?.name} | {m.ground?.name} | {m.date} {m.time}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Matches;
