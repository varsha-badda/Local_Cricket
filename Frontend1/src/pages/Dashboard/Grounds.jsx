import { useEffect, useState } from "react";
import { getGrounds } from "../../api/ground.api";
import Navbar from "../../components/Navbar";

const Grounds = () => {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    getGrounds().then((res) => setGrounds(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl mb-4">Grounds</h2>

        <ul>
          {grounds.map((g) => (
            <li key={g._id}>
              {g.name} — {g.isBooked ? "Booked ❌" : "Available ✅"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Grounds; // ✅ THIS LINE IS REQUIRED
