import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useCart();
  const quantity = item.quantity || 1;

  return (
    <div className="flex items-center gap-4 border-b border-ink/10 py-5">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover bg-ink/5"
      />
      <div className="flex-1">
        <p className="font-serif text-lg">{item.name}</p>
        {item.size && (
          <p className="text-xs text-ink/50 uppercase tracking-wide">
            Size {item.size}
          </p>
        )}
        <p className="text-ink/70">
          ${item.price.toFixed(2)} × {quantity}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-sm text-ink/70">Qty {quantity}</p>
        <button
          onClick={() => removeFromCart(item.id, item.size)}
          className="text-xs tracking-widest uppercase text-ink/50 hover:text-ink"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
