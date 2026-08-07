import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cartItems = [], addToCart, removeFromCart } = useCart();

  if (!product) return null;

  const currentQuantity = cartItems.reduce((sum, item) => {
    const matchesProduct =
      item.id === product.id && (item.size || "") === (product.size || "");

    return matchesProduct ? sum + (item.quantity || 1) : sum;
  }, 0);

  const handleIncrease = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (currentQuantity > 0) {
      removeFromCart(product.id, product.size);
    }
  };

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="description-text">{product.description}</p>
        <p className="description-text">{product.size}</p>
        <p className="text-ink/70 text-sm mb-3">${product.price.toFixed(2)}</p>
      </Link>

      <div className="mt-3 flex items-center gap-1">
        <button
          type="button"
          onClick={handleDecrease}
          className="flex h-5 w-5 items-center justify-center text-lg leading-none hover:text-gold"
          aria-label={`Decrease quantity for ${product.name}`}
        >
          −
        </button>
        <span className="min-w-3 text-center text-sm">{currentQuantity}</span>
        <button
          type="button"
          onClick={handleIncrease}
          className="flex h-5 w-5 items-center justify-center text-lg leading-none hover:text-gold"
          aria-label={`Increase quantity for ${product.name}`}
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={() => addToCart(product)}
        className="mt-3 text-xs tracking-widest uppercase hover:text-gold transition"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
