import favoritePlaceModel from '../models/favoritePlaces.js';

export const createFavoritePlace = async (req, res) => {
  try {
    const newFavoritePlace = new favoritePlaceModel(req.body);
    await newFavoritePlace.save();
    res.status(201).send('New favoriteplace is created');
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const updateFavoritePlaceById = async (req, res) => {
  try {
    const updateFavoritePlace = await favoritePlaceModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateFavoritePlace);
  } catch (error) {
    throw error;
  }
};

export const getFavoritePlaceById = async (req, res) => {
  try {
    const favoriteplace = await favoritePlaceModel.findById(req.params.id);
    res.status(200).json(favoriteplace);
  } catch (error) {
    throw error;
  }
};

export const getAllFavoritePlaces = async (req, res) => {
  try {
    const favoriteplaces = await favoritePlaceModel.find({});
    res.status(202).json(favoriteplaces);
  } catch (error) {
    throw error;
  }
};

export const deleteFavoritePlaceById = async (req, res) => {
  try {
    await favoritePlaceModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`FavoritePlace is deleted`);
  } catch (error) {
    throw error;
  }
};

// export default {
//   createFavoritePlace,
//   updateFavoritePlaceById,
//   getFavoritePlaceById,
//   getAllFavoritePlaces,
//   deleteFavoritePlaceById,
// };
