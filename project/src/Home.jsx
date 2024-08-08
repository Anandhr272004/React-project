
// import React, { useState } from 'react';
// import { IoMdContact } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Example = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex justify-between items-center py-4 bg-teal-700 shadow-md">
//       <div className="flex items-center ml-9 font-bold">
//         <a href="#" className="text-3xl no-underline  pl-9 text-neutral-50 hover:text-neutral-50">
//           Furni.
//         </a>
//       </div>
//       <div className="md:hidden mr-9" onClick={toggleMenu}>
//         {isOpen ? <FaTimes className="text-neutral-50 text-2xl" /> : <FaBars className="text-neutral-50 text-2xl" />}
//       </div>
//       <ul className={`md:flex space-x-12 justify-between items-center pt-4 mr-12 ${isOpen ? 'block' : 'hidden'} md:block`}>
//         {/* <li className="mr-6 ">
//           <a href="#" className="text-gray-400 font-semibold no-underline hover:text-neutral-50 hover:underline decoration-2 hover:decoration-amber-500">
//             Home
//           </a>
//         </li> */}
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             Home
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             Shop
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             About Us
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             Services
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             Blog
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
//             Contact Us
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-neutral-50 text-2xl hover:text-neutral-50 font-bold">
//             <IoMdContact />
//           </a>
//         </li>
//         <li className="mr-6">
//           <a href="#" className="text-neutral-50 text-2xl hover:text-neutral-50">
//             <MdOutlineShoppingCart />
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Example;




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
      <div className="md:hidden mr-6 lg:mr-9" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-neutral-50 text-2xl" /> : <FaBars className="text-neutral-50 text-2xl" />}
      </div>
      <ul className={`md:flex space-x-6 lg:space-x-12 justify-between items-center pt-4 mr-6 lg:mr-12 ${isOpen ? 'block' : 'hidden'} md:block`}>
          {/* dummy        */}
        <li className="mr-4 lg:mr-6">
          <a href="#" className="text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            
          </a>
        </li>

        <li className="mr-4 lg:mr-6">
          <a href="#" className=" transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Home
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Shop
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className=" transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            About Us
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className=" transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Services
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className=" transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
            Blog
          </a>
        </li>
        <li className="mr-4 lg:mr-6">
          <a href="#" className=" transition-all duration-300 ease-in-out text-gray-400 no-underline hover:text-neutral-50 font-semibold hover:underline decoration-2 hover:decoration-amber-500">
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
