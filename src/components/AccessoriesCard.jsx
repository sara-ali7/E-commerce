import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function AccessoriesCard({ accessories, product, item }) {
  const data = accessories ?? product ?? item;

  let addToCart = () => {};
  try {
    ({ addToCart } = useCart());
  } catch {
    addToCart = () => {};
  }

  if (!data) return null;

  const price = Number(data.price || 0);

  return (
    <div className="group">
      <Link to={`/product/${data.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <h3 className="font-serif text-lg">{data.name}</h3>
        <h4 className="font-serif text-lg">{data.description}</h4>
        <h4 className="font-serif text-lg">{data.size}</h4>
        <p className="text-ink/70 text-sm mb-3">${price.toFixed(2)}</p>
      </Link>

      <button
        onClick={() => addToCart(data)}
        className="text-xs tracking-widest uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AccessoriesCard;
