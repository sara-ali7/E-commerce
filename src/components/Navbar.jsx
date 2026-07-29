import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-cream relative">
      <Link to="/" className="font-serif text-2xl tracking-wide">
        FITLINE<span className="text-gold">.</span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-ink/80">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <Link to="/women" className="hover:text-ink">
          Women
        </Link>
        <Link to="/men" className="hover:text-ink">
          Men
        </Link>
        <Link to="/accessories" className="hover:text-ink">
          Accessories
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative" aria-label="Cart">
          <svg
            width="20"
            height="20"
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
    </nav>
  );
}

export default Navbar;
