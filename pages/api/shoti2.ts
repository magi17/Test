import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface ShotiData {
  name: string;
  description: string;
  url: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Make a GET request to the external API
    const response = await axios.get<ShotiData>("https://random-use-api-production.up.railway.app/shoti");

    // Extract data from the response
    const { name, description, url } = response.data;

    // Return the extracted data as JSON
    return res.status(200).json({ status: 200, name, description, url });
  } catch (error) {
    console.error(error); // Log the error for debugging
    // Handle errors
    res.status(500).json({ error: "Failed to read or parse the JSON file" });
  }
}
