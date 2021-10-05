import { Handler } from "@netlify/functions";
const axios = require("axios");
var ccxt = require("ccxt");

const API_ENDPOINT = "https://coffee.alexflipnote.dev/random.json";
export const handler: Handler = async (event, context) => {
  const hitbtc = new ccxt.hitbtc();

  const bitcoin_ticker = await hitbtc.fetch_ticker("BTC/USDT");
  // setBtc(bitcoin_ticker);
  console.log("bitcoin_ticker", bitcoin_ticker);

  try {
    const { data } = await axios.get(API_ENDPOINT);
    return {
      statusCode: 200,
      body: data.file,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
