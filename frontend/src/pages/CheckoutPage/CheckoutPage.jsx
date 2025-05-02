import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckoutPage.css";
import CartItem from "../../components/CartItem/CartItem";
import { submitOrder } from "../../services/service";

function CheckoutPage() {
  const { cart } = useContext(CartContext);

  const handleOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Du måste vara inloggad för att slutföra beställningen");
      return;
    }

    try {
      await submitOrder(cart, token);
      alert("Beställning skickad!");
    } catch (error) {
      console.error("Fel vid beställning:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div className="checkout-content-wrapper">
        <div className="checkout-items">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <p className="checkout-total">
            Totalt: {cart.reduce((sum, item) => sum + item.price, 0)} kr
          </p>
        </div>

        <div className="checkout-actions">
          <button className="checkout-btn" onClick={handleOrder}>
            Skicka beställning
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
