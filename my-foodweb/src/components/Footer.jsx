import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-4 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <div className="flex flex-row items-center pb-4">
            <img className="box-border h-20 w-20" src={logo} alt="logo" />
            <h1 className=" font-semibold text-xl">Hertiage City</h1>
          </div>
          <p className=" text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Guestservices@hertiagecity.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +1 (888) 888 8888
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Follow us
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Dhruvkumar Patel</span> | All
            rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
