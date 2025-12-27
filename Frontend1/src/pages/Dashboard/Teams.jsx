import { useEffect, useState } from "react";
import { getTeams } from "../../api/team.api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTeams().then(res => setTeams(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <ul className="p-6">
        {teams.map(t => (
          <li key={t._id} onClick={() => navigate(`/teams/${t._id}`)}>
            {t.name}
          </li>
        ))}
      </ul>
    </>
  );
}
