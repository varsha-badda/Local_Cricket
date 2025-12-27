import { useEffect, useState } from "react";
import { getGrounds } from "../../api/api";

const GroundsView = () => {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    getGrounds().then((res) => setGrounds(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-cyan-400 mb-4">Grounds</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {grounds.map((ground) => (
          <div
            key={ground._id}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-pink-500"
          >
            <h2 className="font-semibold">{ground.name}</h2>
            <p className="text-sm text-gray-400">
              Location: {ground.location}
            </p>
            <p className="text-sm text-gray-400">
              Capacity: {ground.capacity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroundsView;
