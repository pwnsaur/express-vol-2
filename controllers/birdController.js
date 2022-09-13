import birdModel from '../models/birdModel.js';

export const createBird = async (req, res) => {
  try {
    const newBird = new birdModel(req.body);
    await newBird.save();
    res.status(201).send('New bird is created');
  } catch (error) {
    console.error(error);
    res.status(405).send(error);
  }
};

export const updateBirdById = async (req, res) => {
  try {
    const updateBird = await birdModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBird);
  } catch (error) {
    throw error;
  }
};

export const getBirdById = async (req, res) => {
  try {
    const bird = await birdModel.findById(req.params.id);
    res.status(200).json(bird);
  } catch (error) {
    throw error;
  }
};

export const getAllBirds = async (req, res) => {
  try {
    const birds = await birdModel.find({});
    res.status(202).json(birds);
  } catch (error) {
    throw error;
  }
};

export const deleteBirdById = async (req, res) => {
  try {
    await birdModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Bird is deleted`);
  } catch (error) {
    throw error;
  }
};

// export default {
//   createBird,
//   updateBirdById,
//   getBirdById,
//   getAllBirds,
//   deleteBirdById,
// };
