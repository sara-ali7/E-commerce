import AccessoriesCard from "../components/AccessoriesCard";
import products from "../data/products";

function Accessories() {
  const accessoriesData = products.filter((p) => p.category === "accessories");

  return (
    <div className="px-10 py-16 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-xs tracking-widest uppercase text-gold">
          Shop
        </span>
        <h1 className="font-serif text-4xl mt-2">Accessories</h1>
        <p className="text-ink/60 mt-2 max-w-md">
          The finishing touches — bags, belts, and caps to complete the look.
        </p>
      </div>

      {accessoriesData.length === 0 ? (
        <p className="text-ink/60">No accessories available right now.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {accessoriesData.map((item) => (
            <AccessoriesCard key={item.id} accessories={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Accessories;
