import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const fetchCofee = axios.get(`./.netlify/functions/fetchThings`);

function App() {
  const [coffee, setCoffee] = useState(null);
  useEffect(() => {
    fetchCofee.then(({ data }) => setCoffee(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={coffee || logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
