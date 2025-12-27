import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ViewerLayout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default ViewerLayout;
