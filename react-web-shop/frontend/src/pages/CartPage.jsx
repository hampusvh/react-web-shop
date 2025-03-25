import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <h3>Varukorg</h3>
      {cart.length === 0 ? (
        <p>Varukorgen är tom</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <p>
                {product.name} - {product.price} kr
              </p>
              <button onClick={() => removeFromCart(product._id)}>
                Ta bort
              </button>
            </div>
          ))}
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Gå till kassan
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
