import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

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
        <h4 className="font-serif text-lg">{product.description}</h4>
        <h4 className="font-serif text-lg">{product.size}</h4>
        <p className="text-ink/70 text-sm mb-3">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="text-xs tracking-widest uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
