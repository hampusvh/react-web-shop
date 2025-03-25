import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Pris: {product.price} kr</p>
      <Link to={`/products/${product._id}`} className="details-link">
        Detaljer
      </Link>
      <button onClick={() => addToCart(product)} className="buy-btn">
        Köp
      </button>
    </div>
  );
}

export default ProductCard;
