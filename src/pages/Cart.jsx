import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl mb-8">Your cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-ink/60 mb-6">Your cart is empty.</p>
          <Link
            to="/"
            className="bg-ink text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-ink/90 transition"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}

          <div className="flex justify-between items-center mt-8 mb-6">
            <span className="text-ink/70">Total</span>
            <span className="font-serif text-2xl">${total.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="block text-center bg-ink text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-ink/90 transition"
          >
            Proceed to checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
