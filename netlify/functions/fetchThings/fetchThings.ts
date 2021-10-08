import { Handler } from "@netlify/functions";
import stocks from "stocks.js";

const API_KEY = "5SIWA2DDI2ZPTICC";

const stocksClient = new stocks(API_KEY);

const vooOptions = {
  symbol: "VOO",
  interval: "1min",
  amount: 10,
};

const qqqOptions = {
  symbol: "QQQ",
  interval: "1min",
  amount: 10,
};

const getVoo = async () => await new stocks(API_KEY).timeSeries(vooOptions);
const getQqq = async () => await new stocks(API_KEY).timeSeries(qqqOptions);

export const handler: Handler = async (event, context) => {
  try {
    const [voo, qqq] = await Promise.all([getVoo(), getQqq()]);
    return {
      statusCode: 200,
      body: JSON.stringify({ voo, qqq }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
