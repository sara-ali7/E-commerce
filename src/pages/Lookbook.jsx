import { Link } from "react-router-dom";
import products from "../data/products";

function Lookbook() {
  // Select specific products for curated looks
  const womenLook = products.filter((p) => [13, 3, 4].includes(p.id));
  const menLook = products.filter((p) => [15, 12, 16].includes(p.id));
  const accLook = products.filter((p) => [17, 18, 5].includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fadeIn">
      {/* Editorial Header */}
      <div className="text-center mb-24 max-w-2xl mx-auto">
        <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-3 block">
          Editorial Collection
        </span>
        <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-wide leading-tight">
          SS 2026 Lookbook
        </h1>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
        <p className="text-ink/60 text-lg leading-relaxed font-light">
          A visual exploration of form, tone, and texture. Clean lines, lightweight blends, and functional silhouettes curated for the transition of seasons.
        </p>
      </div>

      {/* Chapter 1: The Art of Simplicity (Women) */}
      <section className="mb-32">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-serif text-xl text-gold italic block mb-2">
              Chapter I
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              The Art of Simplicity
            </h2>
            <p className="text-ink/70 leading-relaxed mb-6 font-light">
              Quiet sophistication defined by structured outerwear, fluid cuts, and breathable fabrics. A modern framework for the daily wardrobe that highlights comfort without compromising poise.
            </p>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[16/9] overflow-hidden bg-ink/5 rounded-sm">
              <img
                src={womenLook[0]?.image}
                alt="Simplicity Look"
                className="w-full h-full object-cover hover:scale-105 transition duration-1000"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {womenLook.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4 rounded-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="font-serif text-lg">{item.name}</h3>
              <p className="text-ink/50 text-xs mt-1 mb-3 line-clamp-2">
                {item.description}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-ink transition flex items-center gap-1"
              >
                Shop this piece &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 2: Structured Comfort (Men) */}
      <section className="mb-32">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-7">
            <div className="aspect-[16/9] overflow-hidden bg-ink/5 rounded-sm">
              <img
                src={menLook[0]?.image}
                alt="Structured Comfort Look"
                className="w-full h-full object-cover hover:scale-105 transition duration-1000"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <span className="font-serif text-xl text-gold italic block mb-2">
              Chapter II
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Structured Comfort
            </h2>
            <p className="text-ink/70 leading-relaxed mb-6 font-light">
              Tailored lines combined with relaxed casual staples. An elevated expression of relaxed dressing, highlighting rich natural tones and durable textures meant to move seamlessly with you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {menLook.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4 rounded-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="font-serif text-lg">{item.name}</h3>
              <p className="text-ink/50 text-xs mt-1 mb-3 line-clamp-2">
                {item.description}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-ink transition flex items-center gap-1"
              >
                Shop this piece &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 3: Essential Additions (Accessories) */}
      <section className="mb-16">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-serif text-xl text-gold italic block mb-2">
              Chapter III
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Essential Additions
            </h2>
            <p className="text-ink/70 leading-relaxed mb-6 font-light">
              The details that define the look. From structural backpacks to protective eyewear and statement jewelry, these pieces add depth and refinement to any aesthetic.
            </p>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[16/9] overflow-hidden bg-ink/5 rounded-sm">
              <img
                src={accLook[0]?.image}
                alt="Essentials Look"
                className="w-full h-full object-cover hover:scale-105 transition duration-1000"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {accLook.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-4 rounded-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="font-serif text-lg">{item.name}</h3>
              <p className="text-ink/50 text-xs mt-1 mb-3 line-clamp-2">
                {item.description}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-ink transition flex items-center gap-1"
              >
                Shop this piece &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Lookbook;
