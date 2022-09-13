import express from 'express';
import {
  createFavoritePlace,
  updateFavoritePlaceById,
  getFavoritePlaceById,
  getAllFavoritePlaces,
  deleteFavoritePlaceById,
} from '../controllers/favoritePlacesController.js';

const router = express.Router();

router.post('/create', createFavoritePlace);
router.post('/update/:id', updateFavoritePlaceById);
router.get('/get/:id', getFavoritePlaceById);
router.get('/get', getAllFavoritePlaces);
router.post('/delete/:id', deleteFavoritePlaceById);

export default router;
