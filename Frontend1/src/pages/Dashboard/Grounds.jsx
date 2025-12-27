import { useEffect, useState } from "react";
import { getGrounds } from "../../api/ground.api";
import { useNavigate } from "react-router-dom";

const Grounds = () => {
  const [grounds, setGrounds] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    getGrounds().then(res => setGrounds(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-10 py-8">
      <h1 className="text-4xl font-bold text-cyan-400">Grounds</h1>

      {role === "manager" && (
        <button
          onClick={() => navigate("/grounds/add")}
          className="mt-6 mb-8 px-6 py-2 bg-cyan-500 text-black rounded-lg"
        >
          ➕ Add Ground
        </button>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {grounds.map((g) => (
          <div key={g._id} className="bg-[#020617] border border-cyan-500/20 rounded-xl p-6">
            <h2 className="text-xl text-cyan-300 font-semibold">{g.name}</h2>
            <p className="text-gray-400">Location: {g.location}</p>

            <p
              className={`mt-2 font-semibold ${
                g.isAvailable ? "text-green-400" : "text-red-400"
              }`}
            >
              {g.isAvailable ? "Available" : "Occupied"}
            </p>

            {role === "manager" && (
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-1 bg-yellow-400 text-black rounded">
                  Edit
                </button>
                <button className="px-4 py-1 bg-pink-600 text-white rounded">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grounds;
