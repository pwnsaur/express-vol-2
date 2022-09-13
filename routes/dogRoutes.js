import express from 'express';
import {
  createDog,
  updateDogById,
  getDogById,
  getAllDogs,
  deleteDogById,
} from '../controllers/dogController.js';

const router = express.Router();

router.post('/create', createDog);
router.post('/update/:id', updateDogById);
router.get('/get/:id', getDogById);
router.get('/get', getAllDogs);
router.post('/delete/:id', deleteDogById);

export default router;
