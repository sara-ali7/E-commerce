import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-6xl mx-auto px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-2xl mb-3">
            FITLINE<span className="text-gold">.</span>
          </p>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Curated pieces that move with you — from quiet mornings to lit
            evenings.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50 mb-4">
            Shop
          </p>
          <ul className="flex flex-col gap-2 text-sm text-cream/80">
            <li>
              <Link to="/women">
                Women
              </Link>
            </li>
            <li>
              <Link to="/men">
                Men
              </Link>
            </li>
            <li>
              <Link to="/accessories">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50 mb-4">
            Support
          </p>
          <ul className="flex flex-col gap-2 text-sm text-cream/80">
            <li>
              <a href="/">
                Contact
              </a>
            </li>
            <li>
              <a href="/">
                Shipping
              </a>
            </li>
            <li>
              <a href="/">
                Returns
              </a>
            </li>
            <li>
              <a href="/">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-cream/50 mb-4">
            Newsletter
          </p>
          <p className="text-cream/60 text-sm mb-4">
            Get updates on new drops.
          </p>
          <div className="flex border-b border-cream/30 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-sm flex-1 focus:outline-none placeholder:text-cream/40"
            />
            <button className="text-xs tracking-widest uppercase text-gold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-10 py-6 text-xs text-cream/40 flex justify-between">
        <span>© 2026 Fitline. All rights reserved.</span>
        <span>Made with care.</span>
      </div>
    </footer>
  );
}

export default Footer;
