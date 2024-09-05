// api/github.js
export default async (req, res) => {
    const token = process.env.GITHUB_TOKEN; // Используйте переменные среды для токена

    // Убедитесь, что req.url начинается с "/"
    const url = `https://api.github.com${req.url.startsWith('/') ? req.url : '/' + req.url}`;

    try {
        console.log('Запрос к URL:', url); // Логирование запроса для отладки

        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json' // Убедитесь, что используется правильный заголовок
            }
        });

        if (!response.ok) {
            console.error(`GitHub API responded with status ${response.status}: ${await response.text()}`); // Логирование ошибки
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Ошибка при запросе к GitHub API:', error);
        res.status(500).json({ error: 'Ошибка при запросе к GitHub API' });
    }
};
