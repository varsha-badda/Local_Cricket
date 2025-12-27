import { useState } from "react";
import { addTeam } from "../../api/team.api";
import { useNavigate } from "react-router-dom";

console.log("AddTeam page loaded");

const AddTeam = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role !== "manager") {
      alert("Only managers can add teams");
      return;
    }

    try {
      await addTeam({ name, score });
      alert("Team added successfully");
      navigate("/teams");
    } catch (err) {
      alert("Failed to add team");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-8 rounded-xl w-[380px]
                   border border-cyan-500/30 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
          Add Team
        </h2>

        {/* Team Name */}
        <label className="block text-gray-300 mb-1">Team Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={role !== "manager"}
          className="w-full mb-4 px-4 py-2 rounded-md
                     bg-[#0f172a] border border-cyan-500/30
                     focus:outline-none"
        />

        {/* Score */}
        <label className="block text-gray-300 mb-1">Score</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          disabled={role !== "manager"}
          className="w-full mb-6 px-4 py-2 rounded-md
                     bg-[#0f172a] border border-cyan-500/30
                     focus:outline-none"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={role !== "manager"}
          className={`w-full py-2 rounded-lg font-semibold transition
            ${
              role === "manager"
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-gray-600 cursor-not-allowed"
            }`}
        >
          {role === "manager" ? "Save Team" : "View Only"}
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
