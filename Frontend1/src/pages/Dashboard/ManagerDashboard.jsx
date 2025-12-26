import { Link } from "react-router-dom";

const ManagerDashboard = () => {
  return (
    <div>
      <h1>Manager Dashboard</h1>
      <Link to="/players">View Players</Link> |{" "}
      <Link to="/players/add">Add Player</Link>
    </div>
  );
};

export default ManagerDashboard;
