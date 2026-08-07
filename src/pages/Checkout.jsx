import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, addQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields");
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-widest uppercase text-gold mb-4">
          Order confirmed
        </p>
        <h2 className="font-serif text-3xl mb-4">
          Thank you, {form.name.split(" ")[0]}.
        </h2>
        <p className="text-ink/60 mb-8">
          A confirmation was sent to {form.email}.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-ink text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-ink/90 transition"
        >
          Back to shop
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <p className="text-ink/60 mb-6">Your cart is empty.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-ink text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-ink/90 transition"
        >
          Back to shop
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:outline-none focus:border-ink placeholder:text-ink/40";

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl mb-8">Checkout</h2>

      <div className="mb-10">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size || ""}`}
            className="flex items-center justify-between gap-3 py-2 text-sm border-b border-ink/10"
          >
            <div className="flex-1">
              <span>
                {item.name}
                {item.size ? ` (${item.size})` : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => removeFromCart(item.id, item.size)}
                className="flex h-6 w-6 items-center justify-center text-lg leading-none text-ink/70 hover:text-ink"
                aria-label={`Decrease quantity for ${item.name}`}
              >
                −
              </button>
              <span className="min-w-5 text-center">{item.quantity || 1}</span>
              <button
                type="button"
                onClick={() => addQuantity(item.id, item.size)}
                className="flex h-6 w-6 items-center justify-center text-lg leading-none text-ink/70 hover:text-ink"
                aria-label={`Increase quantity for ${item.name}`}
              >
                +
              </button>
            </div>
            <span className="text-ink/70 min-w-[70px] text-right">
              ${(item.price * (item.quantity || 1)).toFixed(2)}
            </span>
          </div>
        ))}
        <div className="flex justify-between pt-4">
          <span className="text-ink/70">Total</span>
          <span className="font-serif text-xl">${total.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping address"
          value={form.address}
          onChange={handleChange}
          className={inputClass}
        />
        <button
          type="submit"
          className="mt-4 bg-ink text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-ink/90 transition"
        >
          Place order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
