import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTeam } from "../../../api/api";

const AddTeam = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeam({ name });
    navigate("/manager/teams");
  };

  return (
    <div className="max-w-md bg-[#28292d] p-6 rounded-xl">
      <h2 className="text-[#45f3ff] text-xl font-bold mb-4">
        Add Team
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Team name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/20 text-white px-4 py-2 rounded-lg outline-none"
          required
        />

        <button
          type="submit"
          className="bg-[#45f3ff] text-black py-2 rounded-lg font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
