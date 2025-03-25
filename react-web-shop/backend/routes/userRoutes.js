const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error("Kunde inte hämta användare", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

router.put("/password", authMiddleware, async (req, res) => {
  const { newPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(req.user.userId, { password: hashedPassword });

    res.json({ message: "Lösenord ändrat" });
  } catch (error) {
    console.error("Kunde inte ändra lösenord:", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

router.put("/change-password", authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "Fyll i båda fälten." });
  }

  try {
    const user = await User.findById(req.user.userId);
    if (!user)
      return res.status(404).json({ message: "Användare hittades inte." });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Nuvarande lösenord är fel." });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: "Lösenordet har uppdaterats." });
  } catch (error) {
    console.error("Fel vid lösenordsbyte:", error);
    res.status(500).json({ message: "Serverfel." });
  }
});

module.exports = router;
