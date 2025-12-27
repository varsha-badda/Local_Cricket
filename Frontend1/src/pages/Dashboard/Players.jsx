const isManager = localStorage.getItem("role") === "manager";

{isManager && (
  <div>
    <input placeholder="Name" />
    <input placeholder="Role" />
    <input placeholder="Age" />
    <button onClick={addPlayer}>Add Player</button>
  </div>
)}

{players.map(p => (
  <li key={p._id}>
    {p.name}
    {isManager && (
      <button onClick={() => deletePlayer(p._id)}>Delete</button>
    )}
  </li>
))}
