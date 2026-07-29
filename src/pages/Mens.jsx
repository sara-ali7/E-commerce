import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Men() {
  const men = products.filter((p) => p.category === "men");

  return (
    <div className="px-10 py-16 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-xs tracking-widest uppercase text-gold">
          Shop
        </span>
        <h1 className="font-serif text-4xl mt-2">Men</h1>
        <p className="text-ink/60 mt-2 max-w-md">
          Brand men clothes and shoes.
        </p>
      </div>

      {men.length === 0 ? (
        <p className="text-ink/60">No product available right now.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {men.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Men;
