const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Användarnamn finns redan" });
    }

    const NewUser = new User({ username, password });
    await NewUser.save();

    res.status(201).json({ message: "Användare har skapats" });
  } catch (error) {
    console.error("Fel vid registrering:", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Fel användarnamn eller lösenord" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Fel användarnamn eller lösenord" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Fel vid inloggning:", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

module.exports = router;
