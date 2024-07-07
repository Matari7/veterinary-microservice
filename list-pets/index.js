const express = require('express');
const Redis = require('ioredis');
const jwt = require('jsonwebtoken');

const redis = new Redis({ host: 'redis' }); // Connect to Redis
const app = express();
const SECRET_KEY = 'mysecretkey';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

/*app.get('/pets', async (req, res) => {
  const pets = await redis.lrange('pets', 0, -1); // Get all pets from Redis
  const result = pets.map(pet => JSON.parse(pet));
  res.status(200).json({ user: req.user, pets: result });
});*/

app.get('/pets', (req, res) => {
  res.json([
    {
      "name": "Fidoe",
      "breed": "Labrador",
      "gender": "Macho"
    },
    {
      "name": "Bella",
      "breed": "Beagle",
      "gender": "Hembra"
    },
    {
      "name": "Max",
      "breed": "Golden Retriever",
      "gender": "Macho"
    },
    {
      "name": "Lucy",
      "breed": "Bulldog",
      "gender": "Hembra"
    }
  ]);
});

app.listen(3001, () => {
  console.log('Pet listing microservice listening on port 3001');
});
