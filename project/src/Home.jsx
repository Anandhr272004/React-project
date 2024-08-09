
import React, { useState } from 'react';
import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 bg-teal-700 shadow-md">
      <div className="flex items-center ml-6 lg:ml-9 font-bold">
        <a href="#" className="text-2xl lg:text-3xl no-underline pl-6 lg:pl-9 text-neutral-50 hover:text-neutral-50">
          Furni.
        </a>
      </div>
      {/* Toggle button */}
      <div className="md:hidden mr-6 lg:mr-9" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="text-neutral-50 text-2xl cursor-pointer hover:text-amber-500 transition-all duration-300 ease-in-out" />
        ) : (
          <FaBars className="text-neutral-50 text-2xl cursor-pointer hover:text-amber-500 transition-all duration-300 ease-in-out" />
        )}
      </div>
      {/* Navigation links */}
      <ul className={`md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-12 justify-between items-center pt-4 md:pt-0 mr-6 lg:mr-12 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {/* Dummy */}
        <li className="mr-4 lg:mr-6">
          <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            {/* Placeholder */}
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Home
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Shop
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            About Us
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Services
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Blog
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Contact Us
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="text-neutral-50 text-xl lg:text-2xl hover:text-neutral-50 font-bold">
            <IoMdContact />
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="text-neutral-50 text-xl lg:text-2xl hover:text-neutral-50">
            <MdOutlineShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Example;
