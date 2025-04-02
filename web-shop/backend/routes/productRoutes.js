const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

//Hämtar alla produkter
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Fel vid hämtning av produkter", error);
    res.status(500).json({ message: "Server error", error });
  }
});

//Hämta produkt via ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Kunde inte hitta produkt" });
    }
    res.json(product);
  } catch (error) {
    console.error("Fel vid hämtning av produkt:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

//Skapa en ny produkt
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    console.error("Kunde inte skapa produkt", error);
    res.status(500).json({ message: "Server error", error });
  }
});

//Uppdatera produkt via ID
router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({ message: "Kunde inte hitta produkt" });
    }
    res.json(updateProduct);
  } catch (error) {
    console.error("Kunde inte uppdatera produkt:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

//Ta bort produkt via ID
router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Hittade inte produkt" });
    }
    res.json({ message: "Produkten har tagits bort" });
  } catch (error) {
    console.error("Kunde inte ta bort produkt:", error);
    res.status(500).json({ message: "Server error", error });
  }
});
module.exports = router;
