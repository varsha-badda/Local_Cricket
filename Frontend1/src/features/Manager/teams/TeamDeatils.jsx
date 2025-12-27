import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamById } from "../../../api/api";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getTeamById(id).then((res) => setTeam(res.data));
  }, [id]);

  if (!team) return <p className="text-[#9eb3b5]">Loading...</p>;

  return (
    <div className="bg-[#28292d] p-6 rounded-xl">
      <h2 className="text-[#45f3ff] text-xl font-bold">
        {team.name}
      </h2>

      <p className="text-[#9eb3b5] mt-2">
        Players: {team.players?.length || 0}
      </p>
    </div>
  );
};

export default TeamDetails;
