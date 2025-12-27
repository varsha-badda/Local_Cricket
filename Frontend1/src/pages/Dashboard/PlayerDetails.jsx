import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerById } from "../../api/player.api";
import Navbar from "../../components/Navbar";

const PlayerDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    getPlayerById(id).then((res) => setPlayer(res.data));
  }, [id]);

  if (!player) return null;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <p><b>Name:</b> {player.name}</p>
        <p><b>Role:</b> {player.role}</p>
        <p><b>Age:</b> {player.age}</p>
        <p><b>Runs:</b> {player.runs}</p>
        <p><b>Wickets:</b> {player.wickets}</p>
      </div>
    </>
  );
};

export default PlayerDetails;
