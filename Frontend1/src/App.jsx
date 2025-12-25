function App() {
  const testBackend = async () => {
    console.log("Button clicked"); // 👈 frontend test

    try {
      const res = await fetch("http://localhost:4000/");
      const text = await res.text();
      alert("Response from backend: " + text);
    } catch (err) {
      console.error(err);
      alert("ERROR: Backend not reachable");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend Running</h1>
      <button onClick={testBackend}>
        TEST BACKEND CONNECTION
      </button>
    </div>
  );
}

export default App;
