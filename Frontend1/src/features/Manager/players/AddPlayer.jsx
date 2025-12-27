import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../../../api/api";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await addPlayer({ name, role });
    navigate("/manager/players");
  };

  return (
    <form onSubmit={submit} className="max-w-md">
      <h2 className="text-xl text-cyan-400 mb-4">Add Player</h2>

      <input
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-3 p-2 bg-zinc-900 border border-zinc-700"
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="px-4 py-2 bg-pink-500 rounded">Save</button>
    </form>
  );
};

export default AddPlayer;
