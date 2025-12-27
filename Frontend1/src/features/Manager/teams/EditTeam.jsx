import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTeamById, updateTeam } from "../../../api/api";

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    getTeamById(id).then((res) => setName(res.data.name));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTeam(id, { name });
    navigate("/manager/teams");
  };

  return (
    <div className="max-w-md bg-[#28292d] p-6 rounded-xl">
      <h2 className="text-[#45f3ff] text-xl font-bold mb-4">
        Edit Team
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/20 text-white px-4 py-2 rounded-lg outline-none"
          required
        />

        <button
          type="submit"
          className="bg-[#45f3ff] text-black py-2 rounded-lg font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
