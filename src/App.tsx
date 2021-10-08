import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const fetchStock = () => axios.get(`./.netlify/functions/fetchThings`);
const fetchCrypto = () => axios.get(`./.netlify/functions/fetchMarketData`);

function App() {
  const [stock, setStock] = useState<any>({});
  const [crypto, setCrypto] = useState<any>({});

  useEffect(() => {
    fetchStock().then(({ data }) => setStock(data));
  }, []);

  useEffect(() => {
    fetchCrypto().then(({ data }) => setCrypto(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>VOO: {`${stock.voo && stock.voo[0]?.open}`}</p>
        <p>QQQ: {`${stock.qqq && stock.qqq[0]?.open}`}</p>

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
