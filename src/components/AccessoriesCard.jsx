import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function AccessoriesCard({ accessories }) {
  const { addToCart } = useCart();

  if (!accessories) return null;

  return (
    <div className="group">
      <Link to={`/accessories/${accessories.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4">
          <img
            src={accessories.image}
            alt={accessories.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <h3 className="font-serif text-lg">{accessories.name}</h3>
        <p className="description-text">{accessories.description}</p>
        <p className="description-text">{accessories.size}</p>
        <p className="text-ink/70 text-sm mb-3">
          ${Number(accessories.price || 0).toFixed(2)}
        </p>
      </Link>

      <button
        onClick={() => addToCart(accessories)}
        className="text-xs tracking-widest uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AccessoriesCard;
