const isManager = localStorage.getItem("role") === "manager";

{isManager && (
  <div>
    <select>Team A</select>
    <select>Team B</select>
    <select>Ground</select>
    <input type="date" />
    <input type="time" />
    <button onClick={scheduleMatch}>Schedule</button>
  </div>
)}
