import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web 3 Application</h1>
        <nav>
          <p><Link to="/get-info">GetInfo</Link></p>
          <p><Link to="/to-add">To add</Link></p>
        </nav>
      </header>
    </div>
  );
}

export default App;
