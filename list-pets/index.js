const express = require('express');
const Redis = require('ioredis');

const redis = new Redis({ host: 'redis' }); // Connect to Redis
const app = express();

app.get('/pets', async (req, res) => {
  const pets = await redis.lrange('pets', 0, -1); // Get all pets from Redis
  const result = pets.map(pet => JSON.parse(pet));
  res.status(200).json(result);
});

app.listen(3001, () => {
  console.log('Pet listing microservice listening on port 3001');
});
