import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const fetchCofee = () => axios.get(`./.netlify/functions/fetchThings`);
const fetchCrypto = () => axios.get(`./.netlify/functions/fetchMarketData`);

function App() {
  const [coffee, setCoffee] = useState(null);
  const [crypto, setCrypto] = useState<any>({});

  useEffect(() => {
    fetchCofee().then(({ data }) => setCoffee(data));
  }, []);

  useEffect(() => {
    fetchCrypto().then(({ data }) => setCrypto(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={coffee || logo} className="App-logo" alt="logo" />
        <p>eth: {`${crypto?.eth?.last}`}</p>
        <p>btc: {`${crypto?.btc?.last}`}</p>
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
