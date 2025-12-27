const isManager = localStorage.getItem("role") === "manager";

{isManager && (
  <div>
    <input placeholder="Ground name" />
    <input placeholder="Location" />
    <button onClick={addGround}>Add Ground</button>
  </div>
)}

{grounds.map(g => (
  <li key={g._id}>
    {g.name} - {g.isBooked ? "Booked ❌" : "Available ✅"}
    {isManager && (
      <button onClick={() => deleteGround(g._id)}>Delete</button>
    )}
  </li>
))}
