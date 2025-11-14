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
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link flex justify-center items-center gap-2 duration-[0.4s] bg-green-950 text-white py-1 px-2 rounded-[10px]"
              : "nav-link flex justify-center items-center gap-2 duration-[0.4s] text-green-950"
          }
        >
          <FiHome className="nav-icon" />
          <span className="group-hover:border-b border-green-950">Home</span>
        </NavLink>

        {/* Bin */}
        <NavLink
          to="/bin"
          className={({ isActive }) =>
            isActive
              ? "nav-link flex justify-center items-center gap-2 duration-[0.4s] bg-green-950 text-white py-1 px-2 rounded-[10px]"
              : "nav-link flex justify-center items-center gap-2 duration-[0.4s] text-green-950"
          }
        >
          <FiTrash2 className="nav-icon" />
          <span className="group-hover:border-b border-green-950">Bin</span>
        </NavLink>
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
