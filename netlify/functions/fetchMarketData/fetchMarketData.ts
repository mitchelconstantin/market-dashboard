import { Handler } from "@netlify/functions";
import { hitbtc } from "ccxt";

class Crypto {
  public static async getBtc() {
    return await new hitbtc().fetchTicker("BTC/USDT");
  }

  public static async getEth() {
    return await new hitbtc().fetchTicker("ETH/USDT");
  }
}

export const handler: Handler = async (event, context) => {
  const [btc, eth] = await Promise.all([Crypto.getBtc(), Crypto.getEth()]);

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ btc, eth }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
