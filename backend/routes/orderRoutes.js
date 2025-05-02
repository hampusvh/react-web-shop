const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Beställningen är tom" });
  }

  try {
    const newOrder = new Order({
      user: req.user.userId,
      items,
    });

    await newOrder.save();

    res.status(201).json({ message: "Beställning mottagen" });
  } catch (error) {
    console.error("Kunde inte spara order:", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    res.json(orders);
  } catch (error) {
    console.error("Fel vid hämtning av beställningar:", error);
    res.status(500).json({ message: "Serverfel" });
  }
});

module.exports = router;
