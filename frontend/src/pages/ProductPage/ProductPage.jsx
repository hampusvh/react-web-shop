import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/service";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.error("Kunde inte hämta produkter", error));
  }, []);
  return (
    <div>
      <h2>Produkter</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
