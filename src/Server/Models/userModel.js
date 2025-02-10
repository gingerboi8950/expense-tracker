import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    // Create User Schema
    username: String,
    password: String,
  },
  { collection: "users" }
); // Specifies a collection

const User = mongoose.model("User", userSchema); // Schema -> Model

export default User;
