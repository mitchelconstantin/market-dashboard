import { Handler } from "@netlify/functions";
const axios = require("axios");
const API_ENDPOINT = "https://coffee.alexflipnote.dev/random.json";
export const handler: Handler = async (event, context) => {
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
