require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
    seedProducts();
  })
  .catch((err) => console.error("MongoDB connection error", err));

const testProducts = [
  {
    name: "Svart T-shirt",
    price: 199,
    category: "T-shirts",
    stock: 50,
  },
  {
    name: "Sneakers Vita",
    price: 799,
    category: "Skor",
    stock: 20,
  },
  {
    name: "Jeans Blå",
    price: 599,
    category: "Jeans",
    stock: 30,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(testProducts);
    console.log("Testprodukter inlagda!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Fel vid seedning:", error);
    mongoose.connection.close();
  }
};
