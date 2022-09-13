import express from 'express';
import {
  createBird,
  updateBirdById,
  getBirdById,
  getAllBirds,
  deleteBirdById,
} from '../controllers/birdController.js';

const router = express.Router();

router.post('/create', createBird);
router.post('/update/:id', updateBirdById);
router.get('/get/:id', getBirdById);
router.get('/get', getAllBirds);
router.post('/delete/:id', deleteBirdById);

export default router;
