import { useEffect, useState } from "react";
import { getMatches } from "../../api/match.api";
import { useNavigate } from "react-router-dom";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    getMatches().then(res => setMatches(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 py-8">
      <h1 className="text-4xl font-bold text-cyan-400">Matches</h1>

      {role === "manager" && (
        <button
          onClick={() => navigate("/matches/add")}
          className="mt-6 mb-8 px-6 py-2 bg-cyan-500 text-black rounded-lg"
        >
          ➕ Schedule Match
        </button>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {matches.map((m) => (
          <div key={m._id} className="bg-[#020617] border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-lg text-cyan-300 font-semibold">
              {m.teamA.name} vs {m.teamB.name}
            </h2>

            <p className="text-gray-400">Ground: {m.ground.name}</p>
            <p className="text-gray-400">Date: {m.date}</p>

            <p
              className={`mt-2 font-semibold ${
                m.status === "scheduled"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {m.status.toUpperCase()}
            </p>

            {role === "manager" && (
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-1 bg-yellow-400 text-black rounded">
                  Edit
                </button>
                <button className="px-4 py-1 bg-pink-600 text-white rounded">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
