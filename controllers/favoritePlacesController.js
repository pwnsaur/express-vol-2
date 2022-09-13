import favoritePlaceModel from '../models/favoritePlaces.js';
import birdModel from '../models/birdModel.js';
import catModel from '../models/catModel.js';
import dogModel from '../models/dogModel.js';

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

export const getAnimals = async (req, res) => {
  const animalModels = {
    ['bird']: birdModel,
    ['cat']: catModel,
    ['dog']: dogModel,
  };
  try {
    const allFavoritePlaces = await favoritePlaceModel.findOne({
      place: req.params.name,
    });
    const animals = await Promise.all(
      allFavoritePlaces.animal.map(async animal => {
        return await animalModels[animal.entity].findOne({ _id: animal.id });
      })
    );
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
  }
};

export const getFavoritePlace = async (req, res) => {
  try {
    const favoritePlaces = await favoritePlaceModel.find();
    const popularPlace = favoritePlaces.reduce((prev, curr) => {
      return prev.animal.length > curr.animal.length ? prev : curr;
    });
    res.status(200).json(popularPlace.place);
  } catch (error) {
    console.error(error);
  }
};
