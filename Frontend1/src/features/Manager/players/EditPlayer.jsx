import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayerById, updatePlayer } from "../../../api/api";

const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getPlayerById(id).then((res) => {
      setName(res.data.name);
      setRole(res.data.role);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await updatePlayer(id, { name, role });
    navigate("/manager/players");
  };

  return (
    <form onSubmit={submit} className="max-w-md">
      <h2 className="text-xl text-cyan-400 mb-4">Edit Player</h2>

      <input
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="px-4 py-2 bg-pink-500 rounded">Update</button>
    </form>
  );
};

export default EditPlayer;
