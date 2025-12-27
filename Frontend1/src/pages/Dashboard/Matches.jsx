import { useEffect, useState } from "react";
import { getMatches } from "../../api/match.api";
import Navbar from "../../components/Navbar";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then(res => setMatches(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <ul className="p-6">
        {matches.map(m => (
          <li key={m._id}>
            {m.teamA.name} vs {m.teamB.name} |
            {m.ground.name} |
            {m.date} {m.time}
          </li>
        ))}
      </ul>
    </>
  );
}
