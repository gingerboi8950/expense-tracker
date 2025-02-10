import express from "express";
import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET_KEY = "your_secret_key"; // Change to env later

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch | !user) {
      return res.status(400).json({ message: "Invalid username or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User registration 
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({
      message: "User registered successfully",
      user: { username: newUser.username },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
