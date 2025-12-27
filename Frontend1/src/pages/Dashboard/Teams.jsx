const isManager = localStorage.getItem("role") === "manager";

{isManager && (
  <div>
    <input
      placeholder="Team name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <button onClick={handleAddTeam}>Add Team</button>
  </div>
)}

{teams.map(t => (
  <li key={t._id}>
    {t.name}
    {isManager && (
      <button onClick={() => deleteTeam(t._id)}>Delete</button>
    )}
  </li>
))}
