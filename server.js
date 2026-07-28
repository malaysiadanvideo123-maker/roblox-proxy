const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/search', async (req, res) => {
    const keyword = req.query.q || "model";
    const robloxApiUrl = `https://catalog.roblox.com/v1/search/items/details?Keyword=${encodeURIComponent(keyword)}&Category=1`;

    try {
        const response = await fetch(robloxApiUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });
        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server proxy Render aktif di port ' + PORT);
});
