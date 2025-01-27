// pages/api/random.js
export default function handler(req, res) {
  const randomResponses = [
    {
      name: "damon",
      description: "💋",
      url: "https://tikcdn.io/ssstik/7461384205109398790",
    },
    {
      name: "dàmon",
      description: "",
      url: "https://tikcdn.io/ssstik/7438207933537586450",
    },
    {
      name: "elena",
      description: "🔥",
      url: "https://tikcdn.io/ssstik/1234567890123456789",
    },
    {
      name: "stefan",
      description: "💔",
      url: "https://tikcdn.io/ssstik/9876543210987654321",
    },
  ];

  // Randomize the number of responses
  const count = Math.floor(Math.random() * randomResponses.length) + 1;

  // Shuffle and slice the array
  const shuffledResponses = randomResponses
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  res.status(200).json(shuffledResponses);
}