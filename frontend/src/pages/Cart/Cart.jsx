import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Varukorg</h2>
      <div className="cart-content-wrapper">
        {cart.length === 0 ? (
          <p className="empty-cart">Varukorgen är tom</p>
        ) : (
          <>
            <div className="cart-item-wrapper">
              {cart.map((product, index) => (
                <CartItem
                  key={index}
                  product={product}
                  onRemove={removeFromCart}
                />
              ))}
              <p className="cart-total">Totalt: {total} kr</p>
            </div>

            {/* Knappen är nu utanför boxen men fortfarande centrerad */}
            <div className="cart-actions">
              <button
                className="cart-btn"
                onClick={() => navigate("/checkout")}
              >
                Gå till kassan
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
