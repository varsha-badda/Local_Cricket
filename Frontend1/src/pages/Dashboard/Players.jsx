import { useEffect, useState } from "react";
import { getPlayers } from "../../api/player.api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <ul className="p-6">
        {players.map(p => (
          <li key={p._id} onClick={() => navigate(`/players/${p._id}`)}>
            {p.name}
          </li>
        ))}
      </ul>
    </>
  );
}
