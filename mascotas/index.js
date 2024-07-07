const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('ioredis');

const redis = new Redis({ host: 'redis' }); // Connect to Redis
const app = express();
app.use(bodyParser.json());

app.post('/pets', async (req, res) => {
  const { name, breed, gender } = req.body;
  const pets = { name, breed, gender };
  await redis.lpush('pets', JSON.stringify(pets)); // Store in Redis
  res.status(201).send('Pet added');
});

app.listen(3000, () => {
  console.log('Pet addition microservice listening on port 3000');
});
