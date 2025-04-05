import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { getProducts } from "../../services/service";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.error("Kunde inte hämta produkter", error));
  }, []);

  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="home">
      <h2>Välkommna till webbshoppen</h2>
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Sök efter produkt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredProducts.length > 0 && (
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div key={product._id} className="search-item">
                <Link to={`/products/${product._id}`}>
                  {product.name} – {product.price} kr
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
