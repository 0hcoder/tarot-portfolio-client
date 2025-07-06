import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuButton = document.getElementById("menu-button");
      const mobileMenu = document.getElementById("mobile-menu");
      if (
        isMenuOpen &&
        !menuButton.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="w-full bg-green-300 flex justify-between items-center px-4 py-3 shadow fixed top-0 z-50 ">
        <div className="text-2xl font-bold">SANGEETA</div>

     
        <div className="hidden md:flex gap-4">
          <a href="#" className="text-lg font-medium hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-lg font-medium hover:text-blue-600">
            About
          </a>
          <a
            href="#serv-heading"
            className="text-lg font-medium hover:text-blue-600"
          >
            Services
          </a>
          <a href="#" className="text-lg font-medium hover:text-blue-600">
            Achievement
          </a>
          <a
            href="#contact-us"
            className="text-lg font-medium hover:text-blue-600"
          >
            Contact
          </a>
          <a href="#" className="text-lg font-medium hover:text-blue-600">
            Testimonial
          </a>
        </div>

        <button
          id="menu-button"
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`absolute top-[8.5%] right-[0.5%] w-fit z-10 bg-green-300 flex flex-col items-center gap-1 p-4 rounded-md shadow-md ease-out transition-transform duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100"
            : "opacity-0 hidden"
        } `}
      >
        <a
          href="#"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#serv-heading"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="#"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Achievement
        </a>
        <a
          href="#contact-us"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
        <a
          href="#"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonial
        </a>
      </div>
    </>
  );
}
