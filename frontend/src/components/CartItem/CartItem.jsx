import "./CartItem.css";

function CartItem({ product, onRemove }) {
  return (
    <div className="cart-item">
      <p>
        {product.name} - {product.price} kr
      </p>
      {onRemove && (
        <button className="remove-btn" onClick={() => onRemove(product._id)}>
          ✖️
        </button>
      )}
    </div>
  );
}

export default CartItem;
