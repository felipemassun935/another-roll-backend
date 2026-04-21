const express = require('express');
const cors = require('cors');
const games = require('./data/games');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/games', (req, res) => {
  res.json(games);
});

app.get('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const game = games.find((g) => g.id === id);
  if (!game) return res.status(404).json({ error: 'Game not found' });
  res.json(game);
});

app.listen(PORT, () => {
  console.log(`Another-Roll API running on http://localhost:${PORT}`);
});
