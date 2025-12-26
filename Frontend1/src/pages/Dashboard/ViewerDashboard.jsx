import { Link } from "react-router-dom";

const ViewerDashboard = () => {
  return (
    <div>
      <h1>Viewer Dashboard</h1>
      <Link to="/players">View Players</Link>
    </div>
  );
};

export default ViewerDashboard;
