import { useEffect, useState } from "react";
import "./OrdersPage.css";
import { getOrders } from "../../services/service";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const data = await getOrders(token);
        setOrders(data);
      } catch (error) {
        console.error("Fel vid hämtning av beställningar:", error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h3>Mina beställningar</h3>
      {orders.length === 0 ? (
        <p>Inga beställningar ännu.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <p>
                <strong>Order-ID:</strong> {order._id}
              </p>
              <p>
                <strong>Produkter:</strong>
              </p>
              <div className="order-items">
                {order.items.map((product, index) => (
                  <div key={index} className="order-item">
                    {product.name} – {product.price} kr
                  </div>
                ))}
              </div>
              <p>
                <strong>Totalt:</strong>{" "}
                {order.items.reduce((sum, item) => sum + item.price, 0)} kr
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
