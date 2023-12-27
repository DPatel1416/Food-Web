import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/img/logo.png";

// Navbar component
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Function to toggle the menu state
  const handleChange = () => {
    setMenu(!menu);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        {/* Navbar container */}
        <div className="flex flex-row justify-between p-3 md:px-33 px-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Logo and business name */}
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              {/* Displaying the logo image */}
              <img className="box-border h-20 w-20" src={logo} alt="logo" />
            </span>
            {/* Displaying the business name */}
            <h1 className="text-xl font-semibold font-style: italic ps-3 pe-5">
              Heritage City
            </h1>
          </div>

          {/* Navigation links for larger screens */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {/* Navigation links using react-scroll */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            {/* Button for login */}
            <Button title="Login" />
          </nav>

          {/* Menu icon for smaller screens */}
          <div className="md:hidden flex items-center">
            {/* Ternary operator to toggle between menu and close icons */}
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Responsive menu for smaller screens */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {/* Responsive navigation links using react-scroll */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          {/* Button for login */}
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

// Export the Navbar component as the default export
export default Navbar;
