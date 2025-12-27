import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

export default function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/teams/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setTeam(res.data));
  }, []);

  if (!team) return null;

  return (
    <>
      <Navbar />
      <h2 className="p-4">{team.name}</h2>
      <ul>
        {team.players?.map(p => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
