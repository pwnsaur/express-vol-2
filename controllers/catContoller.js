import catModel from '../models/catModel.js';

export const createCat = async (req, res) => {
  try {
    const newCat = new catModel(req.body);
    await newCat.save();
    res.status(201).send('New cat is created');
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const updateCatById = async (req, res) => {
  try {
    const updateCat = await catModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCat);
  } catch (error) {
    throw error;
  }
};

export const getCatById = async (req, res) => {
  try {
    const cat = await catModel.findById(req.params.id);
    res.status(200).json(cat);
  } catch (error) {
    throw error;
  }
};

export const getAllCats = async (req, res) => {
  try {
    const cats = await catModel.find({});
    res.status(202).json(cats);
  } catch (error) {
    throw error;
  }
};

export const deleteCatById = async (req, res) => {
  try {
    await catModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Cat is deleted`);
  } catch (error) {
    throw error;
  }
};

// export default {
//   createCat,
//   updateCatById,
//   getCatById,
//   getAllCats,
//   deleteCatById,
// };
