import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-500">
      <ul className="flex gap-5 justify-end px-3 py-2 text-white">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
