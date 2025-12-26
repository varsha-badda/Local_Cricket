import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); // animation duration

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="ball"></div>
      <div className="impact"></div>
    </div>
  );
};

export default Splash;
