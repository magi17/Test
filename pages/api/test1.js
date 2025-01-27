import fs from "fs";
import path from "path";

export default function handler(req, res) {
    try {
        // Path to the JSON file
        const filePath = path.join(process.cwd(), "good.json");

        // Read the JSON file
        const fileContents = fs.readFileSync(filePath, "utf8");

        // Parse the JSON data
        const data = JSON.parse(fileContents);

        // Select a random entry from the JSON array
        const randomResponse = data[Math.floor(Math.random() * data.length)];

        // Send the random response
        res.status(200).json(randomResponse);
    } catch (error) {
        console.error(error); // Log the error for debugging
        // Handle errors
        res.status(500).json({ error: "Failed to read or parse the JSON file" });
    }
}