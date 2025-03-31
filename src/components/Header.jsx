import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="bg-green-700 text-white p-4 shadow-md sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">Paradise Nursery</Link>
      <nav className="space-x-4 float-right">
        {location.pathname !== "/products" && (
          <Link to="/products" className="hover:underline">Products</Link>
        )}
        {location.pathname !== "/cart" && (
          <Link to="/cart" className="relative hover:underline">
            Cart
            <span className="ml-1 inline-block bg-white text-green-700 rounded-full px-2 text-sm">
              {totalItems}
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;