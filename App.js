import React, { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");

  const addAssignment = () => {
    if (title === "") return;
    setAssignments([...assignments, title]);
    setTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Assignment Management App</h2>

      <input
        type="text"
        placeholder="Enter Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addAssignment}>Add Assignment</button>

      <h3>Assignments List</h3>
      <ul>
        {assignments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
