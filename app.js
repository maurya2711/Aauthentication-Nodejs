require("dotenv").config();
require("./config/database").connect();
const User = require("./model/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { firstName, secondName, email, password } = req.body;
    if (!firstName || !secondName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.status(409).json({ message: "User already exists" });
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      secondName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    user.token = token;
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log("+++++", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      res.status(200).json({ message: "User logged in successfully", user });
    }
    res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    console.log("+++++", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/", auth, async (req, res) => {
  res.send("Welcome to Home Page");
});

module.exports = app;
