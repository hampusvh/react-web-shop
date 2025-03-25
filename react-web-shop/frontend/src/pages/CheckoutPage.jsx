import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CheckoutPage() {
  const { cart } = useContext(CartContext);

  const handleOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Du måste vara inloggad för att slutföra beställningen");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Kunde inte skicka beställning");
        return;
      }

      alert("Beställning skickad!");
    } catch (error) {
      console.error("Fel vid beställning:", error);
      alert("Något gick fel");
    }
  };

  return (
    <div>
      <h3>Checkout</h3>
      {cart.map((product, index) => (
        <p key={index}>
          {product.name} - {product.price} kr
        </p>
      ))}
      <button onClick={handleOrder}>Skicka beställning</button>
    </div>
  );
}

export default CheckoutPage;
