const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'demo', password: 'demo123' }
];

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', token: 'demo-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
