import axios from "axios";

export default async function handler(req, res) {
    try {
        // Make a GET request to the external API
        const response = await axios.get("https://random-use-api-production.up.railway.app/shoti");

        // Extract data from the response
        const { name, description, url } = response.data;

        // Return the extracted data as JSON
        return res.status(200).json({ status: 200, name, description, url });
    } catch (e) {
        // Handle errors and return a 500 status
        return res.status(500).json({ error: e.message });
    }
}