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
// Пример серверной функции на Node.js
export default async function handler(req, res) {
    const data = await fetchData(); // Функция для получения данных

    // Логирование размера данных
    console.log(`Размер данных: ${Buffer.byteLength(JSON.stringify(data), 'utf8')} байт`);

    res.status(200).json(data);
}
