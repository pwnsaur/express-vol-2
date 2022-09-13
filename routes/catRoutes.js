import express from 'express';
import {
  createCat,
  updateCatById,
  getCatById,
  getAllCats,
  deleteCatById,
} from '../controllers/catContoller.js';

const router = express.Router();

router.post('/create', createCat);
router.post('/update/:id', updateCatById);
router.get('/get/:id', getCatById);
router.get('/get', getAllCats);
router.post('/delete/:id', deleteCatById);

export default router;
