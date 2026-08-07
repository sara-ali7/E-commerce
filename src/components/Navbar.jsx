import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems = [] } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/women", label: "Women" },
    { to: "/men", label: "Men" },
    { to: "/accessories", label: "Accessories" },
  ];

  return (
    <nav className="relative bg-cream px-6 py-4 md:px-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          FITLINE<span className="text-gold">.</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-ink/80">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-ink"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>

          <Link to="/cart" className="relative" aria-label="Cart">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-ink text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-3 border-t border-ink/10 pt-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm tracking-widest uppercase text-ink/80 hover:text-ink"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
