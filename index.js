import express from 'express';
import connectionToMongo from './utils/connection.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('oh hai');
});

app.listen(3000, () => {
  connectionToMongo();
  console.log(`listening on port ${port}`);
});
