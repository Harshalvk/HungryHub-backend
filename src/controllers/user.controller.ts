import { Request, Response } from "express";
import User from "../models/user.model";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).send(existingUser.toObject());
    }
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error creating user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ msg: "User not found!" });

    user.name = name;
    user.addressLine1 = addressLine1;
    user.country = country;
    user.city = city;

    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error Updating user" });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser) return res.status(404).json({ msg: "User not found" });
    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Something went worng" });
  }
};



export { createCurrentUser, updateCurrentUser, getCurrentUser };