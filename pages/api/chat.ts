import type { NextApiRequest, NextApiResponse } from 'next'; import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyC5n8Fr6Xq722k0jkrRM0emqSQk_4s_C-o'; const genAI = new GoogleGenerativeAI(apiKey);

// List of available models const availableModels = ["gemini-1.0-pro", "gemini-1.5-pro", "gemini-1.5-flash"];

const generationConfig = { temperature: 1, topP: 0.95, topK: 64, maxOutputTokens: 8192, responseMimeType: "text/plain", };

// Chat function async function chatResponse(ask: string) { const selectedModel = availableModels[Math.floor(Math.random() * availableModels.length)]; const model = genAI.getGenerativeModel({ model: selectedModel });

console.log("Using model:", selectedModel);

const chatSession = model.startChat({ generationConfig, history: [], });

const result = await chatSession.sendMessage(ask); const responseText = result.response.text();

return { model: selectedModel, response: responseText }; }

export default async function handler(req: NextApiRequest, res: NextApiResponse) { if (req.method !== 'GET') { return res.status(405).json({ error: 'Method Not Allowed' }); }

const { ask } = req.query; if (!ask || typeof ask !== 'string') { return res.status(400).json({ error: 'ask is required as a query parameter' }); }

try { const response = await chatResponse(ask); console.log(Model: ${response.model}, Response: ${response.response}); res.json(response); } catch (error) { console.error('Error:', error); res.status(500).json({ error: 'An error occurred while processing your request' }); } }

