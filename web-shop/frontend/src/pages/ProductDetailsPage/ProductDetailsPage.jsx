import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProductDetailsPage.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getProductById } from "../../services/service";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch((error) => console.error("Kunde inte hämta produkt", error));
  }, [id]);

  if (!product) return <h2>Laddar produkt...</h2>;

  return (
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>Pris: {product.price} kr</p>
      <p>Kategori: {product.category}</p>
      <p>Antal i lager: {product.stock}</p>
      <div>
        <button onClick={() => navigate("/products")}>Gå tillbaka</button>
        <button onClick={() => addToCart(product)} className="buy-btn">
          Köp
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
