import { Link } from "react-router-dom";
import heroImage from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="grid md:grid-cols-2 bg-cream min-h-[600px]">
      <div className="h-14px">
        <img
          src={heroImage}
          alt="New collection"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-10 py-16 md:px-16">
        <span className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
          SS 2026 Collection
        </span>

        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          Dressed for
          <br />
          Every <span className="text-gold">Chapter.</span>
        </h1>

        <p className="text-ink/70 max-w-md mb-8 leading-relaxed">
          Curated pieces that move with you — from quiet mornings to lit
          evenings. Crafted to last, designed to feel.
        </p>

        <div className="flex gap-4">
          <a
            href="#products-section"
            className="bg-ink text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-ink/90 transition text-center inline-block"
          >
            Shop now
          </a>
          <Link
            to="/lookbook"
            className="border border-ink px-8 py-3 text-sm tracking-widest uppercase hover:bg-ink hover:text-cream transition text-center"
          >
            View lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
