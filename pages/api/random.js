export default function handler(req, res) {
    // Array of random responses
    const responses = [
        { message: "Hello, world!" },
        { message: "Welcome to the random API!" },
        { message: "Next.js is awesome!" },
        { message: "You got a random message!" },
        { message: "API responses can be fun!" },
        { message: "Have a great day!" },
        { message: "Randomness is exciting!" }
    ];

    // Pick a random response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    res.status(200).json(randomResponse);
}