const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [
  { username: 'admin', password: 'password' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Incorrect credentials');
  }
});

app.listen(3002, () => {
  console.log('Authentication microservice listening on port 3002');
});
