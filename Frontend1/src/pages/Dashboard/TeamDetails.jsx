import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/teams/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setTeam(res.data));
  }, [id]);

  if (!team) return null;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl mb-3">{team.name}</h2>

        <h3 className="font-bold">Players</h3>
        <ul>
          {team.players?.map((p) => (
            <li key={p._id}>{p.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeamDetails;
