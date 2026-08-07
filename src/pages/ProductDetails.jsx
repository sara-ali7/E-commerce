import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="px-10 py-16">
        <p className="mb-4">Product not found.</p>
        <Link to="/" className="text-sm underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 px-10 py-16 max-w-5xl mx-auto">
      <div className="aspect-[3/4] bg-ink/5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <Link
          to="/"
          className="text-xs tracking-widest uppercase text-ink/50 hover:text-ink"
        >
          &larr; Back to shop
        </Link>
        <h2 className="font-serif text-4xl mt-4 mb-3">{product.name}</h2>
        <p className="text-xl mb-6">${product.price.toFixed(2)}</p>
        <p className="text-ink/70 leading-relaxed mb-8">
          {product.description}
        </p>

        <p className="text-xs tracking-widest uppercase text-ink/50 mb-3">
          Size
        </p>
        <div className="flex gap-2 mb-8">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm border transition ${
                selectedSize === size
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/20 hover:border-ink"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-ink text-cream px-8 py-4 text-sm tracking-widest uppercase transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
