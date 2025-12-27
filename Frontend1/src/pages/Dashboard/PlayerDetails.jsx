import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerById } from "../../api/player.api";
import Navbar from "../../components/Navbar";

export default function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    getPlayerById(id).then(res => setPlayer(res.data));
  }, []);

  if (!player) return null;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <p>Name: {player.name}</p>
        <p>Role: {player.role}</p>
        <p>Age: {player.age}</p>
        <p>Runs: {player.runs}</p>
        <p>Wickets: {player.wickets}</p>
      </div>
    </>
  );
}
