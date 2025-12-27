import { useEffect, useState } from "react";
import { getGrounds } from "../../api/ground.api";
import Navbar from "../../components/Navbar";

export default function Grounds() {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    getGrounds().then(res => setGrounds(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <ul className="p-6">
        {grounds.map(g => (
          <li key={g._id}>
            {g.name} - {g.isBooked ? "Booked ❌" : "Available ✅"}
          </li>
        ))}
      </ul>
    </>
  );
}
