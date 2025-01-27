import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Path to the JSON file
    const filePath = path.join(process.cwd(), "good.json");

    // Read the JSON file
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse the JSON data
    const data: { message: string }[] = JSON.parse(fileContents);

    // Select a random entry from the JSON array
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomResponse = data[randomIndex];

    // Send the random response
    res.status(200).json(randomResponse);
  } catch (error) {
    console.error(error); // Log the error for debugging
    // Handle errors
    res.status(500).json({ error: "Failed to read or parse the JSON file" });
  }
}
