import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const originalProducts = products.filter((p) => p.id <= 12);

  return (
    <div>
      <Hero />
      <div id="products-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-16">
        {originalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
