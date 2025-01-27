// pages/api/baybayin.js

import axios from 'axios';

export default async function handler(req, res) {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: "Missing q parameter!" });
        }

        const response = await axios.get(
            "https://api-baybayin-transliterator.vercel.app/?text=" + encodeURIComponent(q)
        );

        const result = response.data.baybayin;

        return res.status(200).json({ status: true, result, author: "mark martinez" });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}