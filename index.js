import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  console.log(`New message from ${name} <${email}>:\n${message}`);
  return res.status(200).json({ success: true, message: 'Message received!' });
});

app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});