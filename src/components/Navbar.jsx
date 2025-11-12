import React from "react";
import { FiHome, FiTrash2 } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="app-navbar h-8 flex justify-center items-center gap-10">
      <div className="nav-left">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-title">GeekNotes</span>
        </div>
      </div>

      <nav
        className="nav-center flex justify-center items-center gap-6"
        aria-label="Main navigation"
      >
        <Link
          className="nav-link flex justify-center items-center gap-2 hover:font-semibold hover:text-green-950 group duration-[0.4s]"
          to="/"
        >
          <FiHome className="nav-icon" />
          <span className="group-hover:border-b border-green-950">Home</span>
        </Link>
        <Link
          className="nav-link flex justify-center items-center gap-2 hover:font-semibold hover:text-green-950 group duration-[0.4s]"
          to="/bin"
        >
          <FiTrash2 className="nav-icon" />
          <span className="group-hover:border-b border-green-950">Bin</span>
        </Link>
      </nav>

      <div className="nav-right">
        <div className="avatar" title="Profile" aria-hidden>
          TN
        </div>
      </div>
    </header>
  );
};

export default Navbar;
