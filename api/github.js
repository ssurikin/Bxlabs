// api/github.js
export default async (req, res) => {
    const token = process.env.GITHUB_TOKEN; // Используйте переменные среды для токена

    try {
        const response = await fetch(`https://api.github.com${req.url}`, {
            headers: {
                'Authorization': `token ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Ошибка при запросе к GitHub API:', error);
        res.status(500).json({ error: 'Ошибка при запросе к GitHub API' });
    }
};
