import { add } from "../models/user";

export const create = async (req, res, next) => {
  try {
    const { user, name, availability } = req.body;

    const userDB = {
      user,
      name,
      availability: availability || false
    };

    const createdUser = await add(userDB);
    res.json({ createdUser });
  } catch (err) {
    next(err);
  }
};