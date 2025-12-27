import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Splash from "./pages/Splash";

const Layout = () => {
  const location = useLocation();

  // hide navbar only on splash
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ splash first
  if (showSplash) {
    return <Splash />;
  }

  
  // ✅ then layout + routes
  return <Layout />;
};

export default App;
