import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function ViewerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-3">
        <button onClick={() => navigate("/teams")}>Teams</button>
        <button onClick={() => navigate("/players")}>Players</button>
        <button onClick={() => navigate("/grounds")}>Grounds</button>
        <button onClick={() => navigate("/matches")}>Matches</button>
      </div>
    </>
  );
}
