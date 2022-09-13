import dogModel from '../models/dogModel.js';

export const createDog = async (req, res) => {
  try {
    const newDog = new dogModel(req.body);
    await newDog.save();
    res.status(201).send('New dog is created');
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const updateDogById = async (req, res) => {
  try {
    const updateDog = await dogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateDog);
  } catch (error) {
    throw error;
  }
};

export const getDogById = async (req, res) => {
  try {
    const dog = await dogModel.findById(req.params.id);
    res.status(200).json(dog);
  } catch (error) {
    throw error;
  }
};

export const getAllDogs = async (req, res) => {
  try {
    const dogs = await dogModel.find({});
    res.status(202).json(dogs);
  } catch (error) {
    throw error;
  }
};

export const deleteDogById = async (req, res) => {
  try {
    await dogModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Dog is deleted`);
  } catch (error) {
    throw error;
  }
};
