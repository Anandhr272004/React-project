import React, { useState } from 'react';
import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl lg:text-3xl font-bold text-neutral-50 no-underline">Furni.</a>
            </div>
          </div>
          {/* Hamburger menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-50 hover:text-amber-500 hover:bg-teal-800 focus:outline-none focus:bg-teal-800 focus:text-amber-500"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          {/* Navbar Links */}
          <div className="hidden md:flex md:items-center md:space-x-7">
            <a href="/" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Home</a>
            <a href="/shop" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Shop</a>
            <a href="/about-us" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">About Us</a>
            <a href="/services" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Services</a>
            <a href="/blog" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Blog</a>
            <a href="/contact-us" className="text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Contact Us</a>
            <a href="#" className="text-neutral-50 text-xl hover:text-neutral-50 font-bold"><IoMdContact /></a>
            <a href="#" className="text-neutral-50 text-xl hover:text-neutral-50"><MdOutlineShoppingCart /></a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Home</a>
            <a href="/shop" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Shop</a>
            <a href="/about-us" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">About Us</a>
            <a href="/services" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Services</a>
            <a href="/blog" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Blog</a>
            <a href="/contact-us" className="block text-gray-400 hover:text-neutral-50 font-semibold no-underline hover:underline decoration-2 hover:decoration-amber-500">Contact Us</a>
            <a href="#" className="block text-neutral-50 text-xl hover:text-neutral-50 font-bold"><IoMdContact /></a>
            <a href="#" className="block text-neutral-50 text-xl hover:text-neutral-50"><MdOutlineShoppingCart /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Example;
