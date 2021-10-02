import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const callFetchThings = async (cb: any) => {
  const { data } = await axios.get(`./.netlify/functions/fetchThings`);
  cb(data);
};
function App() {
  const [state, setState] = useState();
  useEffect(() => {
    callFetchThings(setState);
  }, []);
  console.log("state", state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={state || logo} className="App-logo" alt="logo" />
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
