import { useEffect, useState } from "react";
import { getMatches } from "../../api/api";

const MatchesView = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then((res) => setMatches(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-cyan-400 mb-4">Matches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match) => (
          <div
            key={match._id}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-pink-500"
          >
            <h2 className="font-semibold">
              {match.teamA?.name} vs {match.teamB?.name}
            </h2>
            <p className="text-sm text-gray-400">
              Ground: {match.ground?.name}
            </p>
            <p className="text-sm text-gray-400">
              Date: {new Date(match.date).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesView;
