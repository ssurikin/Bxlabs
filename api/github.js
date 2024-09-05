// api/github.js
export default async (req, res) => {
    const token = process.env.GITHUB_TOKEN; // Используйте переменные среды для хранения токена

    try {
        const response = await fetch(`https://api.github.com${req.url}`, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};