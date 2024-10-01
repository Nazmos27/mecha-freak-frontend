import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
// import { useAppSelector } from "../../redux/hooks";
// import { totalCartItems } from "../../redux/features/cart/cartSlice";

const Navbar: React.FC = () => {
  //   const cartItems = useAppSelector(totalCartItems);

  return (
    <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/products"
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/about"
              >
                About us
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          className="text-2xl font-bold flex items-center justify-center"
          to="/"
        >
          <img src="aafdaf" className="size-14" alt="logo" />
          Mecha<span className="text-blue-500 font-extrabold">F</span>reak
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
              to="/about"
            >
              About us
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          <Link to="/cart" className="btn btn-ghost relative">
            <FaCartShopping className="text-xl text-blue-500" />
            <span className="badge absolute top-0 -right-1 bg-red-500 text-white">
              {/* {cartItems} */}4
            </span>
          </Link>
        </div>
        <Link to="/dashboard" className="btn btn-sm myPrimaryBtn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
