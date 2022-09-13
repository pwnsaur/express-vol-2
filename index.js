import express from 'express';
import connectionToMongo from './utils/connection.js';
import birdRoutes from './routes/birdRoutes.js';
import catRoutes from './routes/catRoutes.js';
import dogRoutes from './routes/dogRoutes.js';
import favoritePlacesRoutes from './routes/favoritePlacesRoutes.js';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('oh hai');
});

app.use('/bird', birdRoutes);
app.use('/cat', catRoutes);
app.use('/dog', dogRoutes);
app.use('/favoriteplace', favoritePlacesRoutes);

app.listen(3000, () => {
  connectionToMongo();
  console.log(`listening on port ${port}`);
});
