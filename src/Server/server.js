import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from "./api/users.js";
import expenseRoutes from "./api/expense.js";

dotenv.config(); // Load environment variables
const DB_URI = process.env.DB_URI;

const app = express();
app.use(express.json()); // Tells application to use the built-in JSON middleware.
app.use(cors()); // Allows the frontend to fetch data from the backend


/* -------------------------  API Routes  ------------------------- */

app.use("/api/users", userRoutes);
app.use("/api/expense", expenseRoutes);

const PORT = process.env.PORT || 3500;

ConnectToDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





/* -------------------------  DB Functions  ------------------------- */

// Connects to DB
async function ConnectToDB() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(DB_URI, {dbName: 'ExpenseTrackerDB'});
    console.log("Connected to MongoDB sucessfully.");
  } catch (error) {
    console.error("Connection to MongoDB failed!", error);
    process.exit();
  }
}

// Creates a new user
async function signUp(newUser, newPass) {
  const user = new User({
    username: newUser,
    password: newPass,
  });
  console.log(user);
  await user.save();
}

// Check to see if user exists.
async function login(user, pass) {
    try {
        const userData = await User.find({username: user, password: pass}).exec();
        console.log(userData);
        if (userData.length === 0) {
            return false;
        } else {
            return true;
        }  
    } catch (error) {
        console.error("Error during login: ", error)
        return false;
    }
}

