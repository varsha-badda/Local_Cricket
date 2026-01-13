import { useEffect, useState } from "react";
import { getMatches, deleteMatch } from "../../../api/api";
import ground from "../../../assets/cricket-ground.png";

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    const res = await getMatches();
    setMatches(res.data || []);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this match?");
    if (!confirm) return;

    await deleteMatch(id);
    loadMatches();
  };

  return (
    <div>
      <h2 className="text-xl text-cyan-400 mb-4"><img/>Scheduled Matches</h2>

      {matches.length === 0 ? (
        <p className="text-gray-400">No matches scheduled yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {matches.map((m) => (
            <div
              key={m._id}
              className="bg-zinc-800 p-4 rounded border border-zinc-700 relative"
            >
              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDelete(m._id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-400"
              >
                ✖
              </button>

              <h3 className="font-semibold text-white">
                {m.teamA?.name || "Team A"}{" "}
                <span className="text-pink-400">VS</span>{" "}
                {m.teamB?.name || "Team B"}
              </h3>

              <p className="text-gray-400 mt-1">
                {new Date(m.date).toLocaleString()}
              </p>

              <p className="mt-2 text-green-400 text-sm font-medium">
                Scheduled
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchList;
